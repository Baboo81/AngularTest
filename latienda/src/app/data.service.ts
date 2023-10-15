import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      id: 1,
      titreArticle: "vélo",
      prixArticle: 80,
      description: "Un VTT",
      urlImg: "../assets/img/velo.jpg",
      textAltImg: "Un vélo Scott",
      dispo: false
    },
    {
      id: 2,
      titreArticle: "TV",
      prixArticle: 230,
      description: "Excellente résolution",
      urlImg: "../assets/img/tv.jpg",
      textAltImg: "TV Sony",
      dispo: true
    },
    {
      id: 3,
      titreArticle: "jouets",
      prixArticle: 15,
      description: "Jouets en bois",
      urlImg: "../assets/img/jouets.jpg",
      textAltImg: "Jouets en bois de luxe",
      dispo: false
    }
  ]

  constructor() { }

  //fct qui récupère un objet du [] en fct de son id:
  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
  }
}
