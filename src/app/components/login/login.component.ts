import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import {StyleClassModule} from 'primeng/styleclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    StyleClassModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
  userFullName: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  async onSignIn() {
    try {
      const user = await this.authService.signIn(this.username, this.password);
      // console.log('User signed in:', user);
      const userInfo = await this.authService.getUserInfo();
      // console.log('User Info:', JSON.stringify(userInfo));
      // Redirect to Dashboard
      this.router.navigate(['/dashboard']);
      this.errorMessage = null;
    } catch (error: any) {
      console.error('Sign-in error:', error);
      this.errorMessage = error.message || 'Sign-in failed.';
    }
  }
}
