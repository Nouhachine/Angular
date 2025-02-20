import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listResidences: Residence[] = [
      { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/tunis.jpg", status: "Disponible" },
      { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/tunis.jpg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/tunis.jpg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/tunis.jpg", status: "En Construction" }
    ];
}
