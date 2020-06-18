import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense } from '../data/depense';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-depense-edit',
  templateUrl: './depense-edit.page.html',
  styleUrls: ['./depense-edit.page.scss'],
})
export class DepenseEditPage implements OnInit {

  id: number;
  data: Depense;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) { 
    this.data = new Depense();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      //this.router.navigate(['accueil']);
    })
  }

}
