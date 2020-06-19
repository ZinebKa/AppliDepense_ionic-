import { Component, OnInit } from '@angular/core';
import {Dette} from '../data/dette';
import { DetteService } from '../services/dette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {

  dataDette : Dette;

  constructor(
    public detteService: DetteService,
    public router: Router
    ) { this.dataDette = new Dette();
   }

  ngOnInit() {
  }
  submitFormDette() {
    this.detteService.createItem(this.dataDette).subscribe((response) => {
     // this.router.navigate(['dette']);
    });

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
