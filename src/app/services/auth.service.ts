import { EventEmitter, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  GetUserCommand
} from '@aws-sdk/client-cognito-identity-provider';
import { environment } from '../../environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private region = environment.aws.region;
  private clientId = environment.aws.clientId;
  private clientSecretKey = environment.aws.clientSecretKey;
  private client = new CognitoIdentityProviderClient({
    region: this.region,
  });
  // Create an EventEmitter to notify authentication changes
  authStatusChanged = new EventEmitter<boolean>();

  constructor(private cookieService: CookieService) {}

  async signIn(username: string, password: string) {
    const secretHash = this.computeSecretHash(username);
    const params = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.clientId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
        SECRET_HASH: secretHash,
      },
    });

    try {
      const response = await this.client.send(params);
      // console.log('Sign-in successful:', response);
      if (response.AuthenticationResult) {
        this.storeTokens(
          response.AuthenticationResult.AccessToken!,
          response.AuthenticationResult.RefreshToken!
        );
        this.authStatusChanged.emit(true); // Emit authentication status change
      }
      return response;
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  }

  private computeSecretHash(username: string): string {
    const message = username + this.clientId; 
    const hash = CryptoJS.HmacSHA256(message, this.clientSecretKey); 
    const base64Hash = CryptoJS.enc.Base64.stringify(hash); 
    return base64Hash;
  }


  async refreshTokens(): Promise<void> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token available.');

    const command = new InitiateAuthCommand({
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      ClientId: this.clientId,
      AuthParameters: {
        REFRESH_TOKEN: refreshToken,
        SECRET_HASH: this.computeSecretHash(refreshToken),
      },
    });

    try {
      const response = await this.client.send(command);
      if (response.AuthenticationResult) {
        this.storeTokens(
          response.AuthenticationResult.AccessToken!,
          refreshToken
        );
      }
    } catch (error) {
      console.error('Error refreshing tokens:', error);
    }
  }

  // Log out method that clears the tokens
  logout() {
    this.clearTokens();
    this.authStatusChanged.emit(false); // Emit authentication status change
    window.location.href = '/login'; // Redirect to login page after logout
  }

  // Store tokens in cookies (e.g., 1 hour expiration)
  storeTokens(accessToken: string, refreshToken: string) {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Set expiration for 1 hour (adjust as needed)

    this.cookieService.set('accessToken', accessToken, expires);
    this.cookieService.set('refreshToken', refreshToken, expires);
  }

  // Get the access token from cookies
  getAccessToken(): string | null {
    return this.cookieService.get('accessToken');
  }

  // Get the refresh token from cookies
  getRefreshToken(): string | null {
    return this.cookieService.get('refreshToken');
  }

  // Clear tokens from cookies
  clearTokens() {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
  }

  // Fetch user information
  async getUserInfo(): Promise<any> {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      throw new Error('Access token is not set');
    }

    const command = new GetUserCommand({
      AccessToken: accessToken,
    });

    try {
      const response = await this.client.send(command);
      // console.log('res',response)
      return response.UserAttributes; // User attributes returned from Cognito
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    // Check if access token exists in cookies
    return !!this.getAccessToken();
  }
}