import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
//Pour récupérer les données d'un form:
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { HttpClientModule } from '@angular/common/http';

//App module.ts permet de regrouper des components
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
