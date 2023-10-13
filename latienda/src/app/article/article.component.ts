import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

totalNbLike: number = 0;
comment: string = "Ceci est un commentaire";


//Permet de personnaliser les prp des components
@Input() titreArticle: string;
@Input() prixArticle: number;
@Input() description: string;
@Input() urlImg: string;
@Input() textAltImg: string;
@Input() dispo: boolean;
jaime: boolean = true;

//Permet de transmettre des infos vers le parent:
@Output() info = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      }

  //Code de l'event click:    
  onLike() {
    if (this.jaime === true) {
      this.totalNbLike++;
      this.jaime = false;
    } else {
      this.totalNbLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  //Fct qui permet de changer la couleur du txt:
  getColor() {
    if (this.dispo === true) {
        return "green"
    } else {
        return "red"
    }
  }

}
