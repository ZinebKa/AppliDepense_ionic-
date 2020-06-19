import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dette } from '../data/dette';
import { DetteService } from '../services/dette.service';


@Component({
  selector: 'app-dette-edit',
  templateUrl: './dette-edit.page.html',
  styleUrls: ['./dette-edit.page.scss'],
})
export class DetteEditPage implements OnInit {

  getDette : any;
  id:number;
  dataDette : Dette;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public detteService: DetteService
  ) { 
    this.dataDette = new Dette();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.detteService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.dataDette = response;
    })
  }

  updateDette() {
    this.detteService.updateItem(this.id, this.dataDette).subscribe(response => {
    })
  }


}
