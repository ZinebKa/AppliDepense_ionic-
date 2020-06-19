import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
// pour afficher toutes les dépenses et supprimer une dépense et et etre rediriger vers depense-edit pour la modification
export class AccueilPage implements OnInit {

  depenses: any;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.depenses = [];
  }

  ngOnInit() {
    this.getAllDepenses();
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


modifier(id) {
  this.router.navigate(['depense-edit',{id:id}])
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