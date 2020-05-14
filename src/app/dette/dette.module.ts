import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettePageRoutingModule } from './dette-routing.module';

import { DettePage } from './dette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettePageRoutingModule
  ],
  declarations: [DettePage]
})
export class DettePageModule {}
