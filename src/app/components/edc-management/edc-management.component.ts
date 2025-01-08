import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-edc-management',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule, SidebarComponent],
  templateUrl: './edc-management.component.html',
  styleUrl: './edc-management.component.css',
})
export class EdcManagementComponent implements OnInit {
  edcList: any[] = [];
  cols: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.edcList = [
      {
        deployment: 'Test Deployment',
        status: 'Active',
        version: '1.0',
        cloudProvider: 'Google Cloud - Iowa',
        actions: 'Active'
      },
      {
        deployment: 'Test Deployment 1',
        status: 'Pending',
        version: '1.2',
        cloudProvider: 'Azure',
        actions: 'Pending'
      },
    ];

    this.cols = [
      { field: 'deployment', header: 'Deployment' },
      { field: 'status', header: 'Status' },
      { field: 'version', header: 'Version' },
      { field: 'cloudProvider', header: 'Cloud Provider & Region' },
      { field: 'actions', header: 'Actions' },
    ];

    // Fetch EDC list (mocked for now)
    this.fetchEdcs();
  }

  fetchEdcs() {
    // Mock EDC data. Replace with API call.
    // this.edcList = []; // No EDCs in the system
    // if (this.edcList.length === 0) {
      
    // }
  }

  onCreateEDC(){
    this.router.navigate(['/edc-management/create']);
  }
}
