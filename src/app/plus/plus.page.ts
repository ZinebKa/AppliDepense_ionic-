import { Component, OnInit } from '@angular/core';
import { DettePage } from '../dette/dette.page';
import { AjouterPage } from '../ajouter/ajouter.page';
import { StatistiquePage } from '../statistique/statistique.page';
import { AccueilPage } from '../accueil/accueil.page';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {

  api:string = "http://localhost:8084/api/depense/add";

  constructor(public http: HttpClient) {
    //console.log(this.addDepense());
   
   }

  ngOnInit() {
  }

 /* addDepense() : Observable <any> {
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().append('libele','libeleTest');
    params.append('montant', '100' );
    params.append('note', 'noteTest' );
    params.append('date', 'dateTest' );
    let options = { headers: headers, params: params };


    return this.http.put(this.api, null, options);
  }*/
}
