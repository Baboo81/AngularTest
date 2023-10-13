import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

//titreArticle: string = "Titre de l'article";
//prixArticle: number = 12;
textAltImg: string = "Titre alternatif de l'img";
urlImg: string = "https://via.placeholder.com/400x250";
totalNbLike: number = 0;
comment: string = "Ceci est un commentaire";

//Permet de personnaliser les prp des components
@Input() titreArticle: string;
@Input() prixArticle: number;

//Permet de transmettre des infos vers le parent:
@Output() info = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      }

  //Code de l'event click:    
  onLike() {
    this.totalNbLike++;
    this.info.emit(this.titreArticle);
  }

}
