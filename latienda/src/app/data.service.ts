import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
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

  constructor() { }
}
