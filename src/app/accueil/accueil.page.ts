import { Component, OnInit } from '@angular/core';
import { DettePage } from '../dette/dette.page';
import { AjouterPage } from '../ajouter/ajouter.page';
import { StatistiquePage } from '../statistique/statistique.page';
import { PlusPage } from '../plus/plus.page';
import { Depense } from '../data/depense';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage {
  depenses;

  constructor(public http: HttpClient) {
    this.readAPI('http://localhost:8084/api/depenses')
    .subscribe((data) =>{
      console.log(data);
      this.depenses = data;
    });
       }

   readAPI(URL: string) {
     return this.http.get(URL);
   }
}
