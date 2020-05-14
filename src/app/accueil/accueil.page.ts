import { Component, OnInit } from '@angular/core';
import { DettePage } from '../dette/dette.page';
import { AjouterPage } from '../ajouter/ajouter.page';
import { StatistiquePage } from '../statistique/statistique.page';
import { PlusPage } from '../plus/plus.page';
import { Depense } from '../data/depense';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  listDepenses: Depense[] = [ {nom : "Depense",
                               catégorie : "Alimentation",
                                date : "10/04/2019",
                                montant: 200,},
                                {nom : "Depense",
                                catégorie : "Shopping",
                                date :"25/06/2019",
                                montant: 200,
                              }];

  constructor() { }

  ngOnInit() {
  }

}
