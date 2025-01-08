import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-create-edc',
  standalone: true,
  imports: [
    DropdownModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './create-edc.component.html',
  styleUrl: './create-edc.component.css',
})
export class CreateEdcComponent {
  createEdcForm: FormGroup;
  step = 1;

  cloudProviders = [
    { label: 'AWS', value: 'aws' },
    { label: 'Azure', value: 'azure' },
    { label: 'Google Cloud', value: 'gcp' },
  ];

  regions = [
    { label: 'US-East-1', value: 'us-east-1' },
    { label: 'US-West-1', value: 'us-west-1' },
  ];

  hardwareProfiles = [
    { label: 'Standard', value: 'standard' },
    { label: 'High Performance', value: 'high-performance' },
  ];

  versions = [
    { label: 'v1.0', value: '1.0' },
    { label: 'v2.0', value: '2.0' },
  ];

  constructor(private fb: FormBuilder) {
    this.createEdcForm = this.fb.group({
      name: ['', Validators.required],
      myDeployment: ['', Validators.required],
      cloudProvider: ['', Validators.required],
      region: ['', Validators.required],
      hardwareProfile: ['', Validators.required],
      version: ['', Validators.required],
    });
  }

  onNext() {
    if (this.createEdcForm.valid) {
      this.step = 2;
    }
  }

  onSubmit() {
    // console.log('Form submitted:', this.createEdcForm.value);
  }
}
