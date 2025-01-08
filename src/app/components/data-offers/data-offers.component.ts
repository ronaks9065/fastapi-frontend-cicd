import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-data-offers',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './data-offers.component.html',
  styleUrl: './data-offers.component.css'
})
export class DataOffersComponent {

}
