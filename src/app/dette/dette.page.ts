import { Component, OnInit } from '@angular/core';
import { AjouterPage } from '../ajouter/ajouter.page';
import { AccueilPage } from '../accueil/accueil.page';
import { StatistiquePage } from '../statistique/statistique.page';
import { PlusPage } from '../plus/plus.page';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-dette',
  templateUrl: './dette.page.html',
  styleUrls: ['./dette.page.scss'],
})
export class DettePage  {
  dettes;

  constructor(public http: HttpClient) {
    this.readAPI('http://localhost:8084/api/dettes')
    .subscribe((data) =>{
      console.log(data);
      this.dettes = data;
    });
       }

   readAPI(URL: string) {
     return this.http.get(URL);
   }

}
