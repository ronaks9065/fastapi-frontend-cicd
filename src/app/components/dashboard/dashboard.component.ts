import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
