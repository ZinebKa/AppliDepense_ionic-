import { Component, OnInit } from '@angular/core';
import { DetteService } from '../services/dette.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dette',
  templateUrl: './dette.page.html',
  styleUrls: ['./dette.page.scss'],
})
export class DettePage implements OnInit {
  dettes :any;

  constructor(
    public detteService: DetteService,
    public router: Router
  ) {
    this.dettes = [];
  }

  ngOnInit() {
    this.getAllDettes();
  }

  ionViewWillEnter() {
    this.getAllDettes();
  }

  getAllDettes() {
    this.detteService.getList().subscribe(response => {
      console.log(response);
      this.dettes = response;
    })
  }


  deleteDette(dette) {
    this.detteService.deleteItem(dette.id).subscribe(Response => {
      this.getAllDettes();
    });
  }


modifierD(id) {
  this.router.navigate(['dette-edit',{id:id}])
}
}
 /* constructor(public http: HttpClient) {
    this.readAPI('http://localhost:8084/api/dettes')
    .subscribe((data) =>{
      console.log(data);
      this.dettes = data;
    });
       }

   readAPI(URL: string) {
     return this.http.get(URL);
   }
*/

