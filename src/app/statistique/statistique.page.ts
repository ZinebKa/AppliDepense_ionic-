import { Component, OnInit } from '@angular/core';
import { DettePage } from '../dette/dette.page';
import { AjouterPage } from '../ajouter/ajouter.page';
import { AccueilPage } from '../accueil/accueil.page';
import { PlusPage } from '../plus/plus.page';
import Chart from 'chart.js';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage implements OnInit {

  //pieChartData;
  constructor() { }

  ngOnInit() {
    this.useAnotherOneWithWebpack();
   // this.useAngularLibrary();
  }
  useAnotherOneWithWebpack() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout","Septembre","Octobre","Novembre","Decembre"],
            datasets: [{
              label: "Graphe des mois",
              backgroundColor: [
                'rgba(255, 150, 182, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(143, 102, 255, 0.2)',
                'rgba(133, 112, 255, 0.2)',
                'rgba(123, 122, 255, 0.2)',
                'rgba(113, 132, 255, 0.2)',
                'rgba(163, 142, 255, 0.2)',
                'rgba(173, 152, 255, 0.2)',
                'rgba(255, 159, 164, 0.2)'
              ],
              borderColor: [              
              'rgba(255, 150, 182, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(143, 102, 255, 0.2)',
              'rgba(133, 112, 255, 0.2)',
              'rgba(123, 122, 255, 0.2)',
              'rgba(113, 132, 255, 0.2)',
              'rgba(163, 142, 255, 0.2)',
              'rgba(173, 152, 255, 0.2)',
              'rgba(255, 159, 164, 0.2)'
              ],
              data: [2, 7, 6, 5, 5, 10, 15, 10, 10, 5, 10, 15],
              borderWidth: 1
            }]
       }
    });
    /*var ctx2 = (<any>document.getElementById('canvas-chart-2')).getContext('2d');
    var chart2 = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["Depenses", "Dettes", "Emprunts"],
            datasets: [{
              label: "Graphe des depenses",
              backgroundColor: [
                'rgba(255, 150, 182, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [              
              'rgba(255, 150, 182, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
              ],
              data: [70, 10, 20],
              borderWidth: 1
            }]
       }
    });
  }
 useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'Percent'],
        ['Ionic',     33],
        ['Angular',      33],
        ['JavaScript',  33]
      ],
      options: {
      'title': 'Technologies',
      'width': 400,
      'height': 300
      }
    };
  }*/
  }
}