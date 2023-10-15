import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

//Décorateur:
@Component({
  selector: 'app-root',//Sélectionne la balise <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export permet d'exporter le code vers le html
export class AppComponent implements OnInit, OnDestroy {
  title = 'latienda';
  message: string = "";
  secondes;
  compteurSubscription: Subscription;
  liste;

  constructor (private dataService:DataService) {}

  ngOnInit () {
    this.liste = this.dataService.listeArticles

    //Obervable : Compteur:
    //Les opérateurs (permettent de modifier les données reçues) : filter, map
    const compteur = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(value => value % 2 === 0 ?
        `${value} est pair` : 
        `${value} est impair`
        )
    );

    //Observer, qui récupère des données de l'observable:
    //L'observable sera stocké dans une variable:
    this.compteurSubscription = compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) =>console.error(e),
      complete: () => console.info('complete')
      })
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  //Permet d'éviter les fuites de données:
  ngOnDestroy() {
      this.compteurSubscription.unsubscribe();
  }
}
