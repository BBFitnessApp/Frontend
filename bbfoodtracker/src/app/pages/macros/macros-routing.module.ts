import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacrosPage } from './macros.page';

const routes: Routes = [
  {
    path: '',
    component: MacrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacrosPageRoutingModule {}
