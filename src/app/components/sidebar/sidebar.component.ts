import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {}

  userInfo: any;
  menuItems: MenuItem[] = [
    {
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          routerLink: '/dashboard',
          title: 'Go to Dashboard',
        },
        {
          label: 'EDC Management',
          icon: 'pi pi-table',
          routerLink: '/edc-management',
          title: 'EDC Management',
        },
        {
          label: 'Create EDC',
          icon: 'pi pi-table',
          routerLink: '/edc-management/create',
          title: 'EDC Management',
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: 'Providing',
      items: [
        {
          label: 'Create Data Offer',
          icon: 'pi pi-plus-circle',
          routerLink: '/create-data-offers',
          title: 'Create a new data offer',
        },
        {
          label: 'Assets',
          icon: 'pi pi-box',
          routerLink: '/assets',
          title: 'Manage your assets',
        },
        {
          label: 'Policies',
          icon: 'pi pi-shield',
          routerLink: '/policies',
          title: 'Manage policies',
        },
        {
          label: 'Data Offers',
          icon: 'pi pi-sliders-h',
          routerLink: '/data-offers',
          title: 'View data offers',
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: 'Consuming',
      items: [
        {
          label: 'Catalog Browser',
          icon: 'pi pi-table',
          routerLink: '/catalog-browser',
          title: 'Browse catalogs',
        },
        {
          label: 'Contracts',
          icon: 'pi pi-check-square',
          routerLink: '/contracts',
          title: 'View your contracts',
        },
        {
          label: 'Transfer History',
          icon: 'pi pi-history',
          routerLink: '/transfer-history',
          title: 'View transfer history',
        },
      ],
    },
  ];

  async ngOnInit() {
    this.userInfo = await this.authService.getUserInfo();
    // console.log('userinfo', this.userInfo);
  }

  get currentUrl(): string {
    return this.router.url;
  }
}
