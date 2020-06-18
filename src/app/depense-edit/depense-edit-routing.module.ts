import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepenseEditPage } from './depense-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DepenseEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepenseEditPageRoutingModule {}
