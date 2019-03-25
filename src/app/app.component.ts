import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
	titre = 'Pizza YOLO';
  menu = ["Vegetariana", "Diavolo", "Parmeggiano", "Poulet"];
  menuVisible = false;
  pristine = true

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }

}