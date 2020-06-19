import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetteEditPageRoutingModule } from './dette-edit-routing.module';

import { DetteEditPage } from './dette-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetteEditPageRoutingModule
  ],
  declarations: [DetteEditPage]
})
export class DetteEditPageModule {}
