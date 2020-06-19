import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccueilPage } from '../accueil/accueil.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  mdp: string;

  constructor(public router: Router) {

  }

  login(){
    if(this.email == "mail" && this.mdp == "123")
    {
      this.router.navigate(['/accueil']);
    } 
  }

  

}
