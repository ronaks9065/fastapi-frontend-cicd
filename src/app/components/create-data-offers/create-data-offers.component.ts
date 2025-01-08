import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-data-offers',
  standalone: true,
  imports: [
    SidebarComponent,
    CardModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    FormsModule
  ],
  templateUrl: './create-data-offers.component.html',
  styleUrl: './create-data-offers.component.css',
})
export class CreateDataOffersComponent {
  methodOptions = [
    { label: 'GET', value: 'GET' },
    { label: 'POST', value: 'POST' },
    { label: 'PUT', value: 'PUT' },
    { label: 'DELETE', value: 'DELETE' },
  ];

  selectedMethod: string = 'GET';
  url: string = '';
  enableMethodParam: boolean = false;
  enablePathParam: boolean = false;
  enableQueryParam: boolean = false;
  enableRequestBodyParam: boolean = false;

  addQueryParam() {
    // console.log('Add Query Param clicked');
  }
}
