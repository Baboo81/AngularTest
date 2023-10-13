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
  message: string = "";

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  liste = [
    {
      titreArticle: "vélo",
      prixArticle: 80,
      description: "Un VTT",
      urlImg: "../assets/img/velo.jpg",
      textAltImg: "Un vélo Scott",
      dispo: false
    },
    {
      titreArticle: "TV",
      prixArticle: 230,
      description: "Excellente résolution",
      urlImg: "../assets/img/tv.jpg",
      textAltImg: "TV Sony",
      dispo: true
    },
    {
      titreArticle: "jouets",
      prixArticle: 15,
      description: "Jouets en bois",
      urlImg: "../assets/img/jouets.jpg",
      textAltImg: "Jouets en bois de luxe",
      dispo: false
    }
  ]
}
