import { Component, OnInit } from '@angular/core';
import { DettePage } from '../dette/dette.page';
import { AjouterPage } from '../ajouter/ajouter.page';
import { StatistiquePage } from '../statistique/statistique.page';
import { PlusPage } from '../plus/plus.page';
import { Depense } from '../data/depense';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})

export class AccueilPage implements OnInit {

  depenses: any;

  constructor(
    public apiService: ApiService
  ) {
    this.depenses = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllDepenses();
  }

  getAllDepenses() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.depenses = response;
    })
  }


  delete(depense) {
    this.apiService.deleteItem(depense.id).subscribe(Response => {
      this.getAllDepenses();
    });
  }

}

/*export class AccueilPage {
  
  depenses : any;

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
}*/