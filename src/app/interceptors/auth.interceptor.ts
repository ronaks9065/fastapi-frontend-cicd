import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Use `inject` to access AuthService
  const accessToken = authService.getAccessToken(); // Get the access token

  // If token is available, clone the request and attach the Authorization header
  if (accessToken) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next(clonedRequest);
  }

  // Pass the request as-is if no token is found
  return next(req);
};
