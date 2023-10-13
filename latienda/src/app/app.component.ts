import { Component } from '@angular/core';

//Décorateur:
@Component({
  selector: 'app-root',//Sélectionne la balise <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export permet d'exporter le code vers le html
export class AppComponent {
  title = 'latienda';
}
