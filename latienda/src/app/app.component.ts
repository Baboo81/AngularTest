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
  prix1: number = 80;
  prix2: number = 230;
  prix3: number = 15;
  message: string = "";

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }
}
