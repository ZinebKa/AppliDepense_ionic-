import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepenseEditPageRoutingModule } from './depense-edit-routing.module';

import { DepenseEditPage } from './depense-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepenseEditPageRoutingModule
  ],
  declarations: [DepenseEditPage]
})
export class DepenseEditPageModule {}
