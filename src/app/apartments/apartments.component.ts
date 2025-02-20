import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = [
    { apartNum: 18, floorNum: 4, surface: 200, terrace: true, surfaceterrace: 250, category: 'C', ResidenceId: 1 }
  ];


}
