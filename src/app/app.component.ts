import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Listen to authentication status changes
    this.authService.authStatusChanged.subscribe(
      (authStatus: boolean) => {
        this.isAuthenticated = authStatus;  // Update the local `isAuthenticated` value
        // console.log('Is Authenticated:', this.isAuthenticated);
      }
    );
  }
}