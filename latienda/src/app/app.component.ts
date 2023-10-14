import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

//Décorateur:
@Component({
  selector: 'app-root',//Sélectionne la balise <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export permet d'exporter le code vers le html
export class AppComponent implements OnInit {
  title = 'latienda';
  message: string = "";
  liste;

  constructor (private dataService:DataService) {}

  ngOnInit () {
    this.liste = this.dataService.listeArticles
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

}
