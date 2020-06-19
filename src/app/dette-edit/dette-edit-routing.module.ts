import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetteEditPage } from './dette-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DetteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetteEditPageRoutingModule {}
