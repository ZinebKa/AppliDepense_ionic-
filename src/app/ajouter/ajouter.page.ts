import { Component, OnInit } from '@angular/core';
import { DettePage } from '../dette/dette.page';
import { AccueilPage } from '../accueil/accueil.page';
import { StatistiquePage } from '../statistique/statistique.page';
import { PlusPage } from '../plus/plus.page';
import {Depense} from '../data/depense';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
  
  data : Depense;

  constructor(
    public apiService: ApiService,
    public router: Router
    ) { this.data = new Depense(); }

  ngOnInit() {
  }
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
     // this.router.navigate(['accueil']);
    });

  }

}
