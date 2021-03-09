import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritepagePage } from './favoritepage.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritepagePageRoutingModule {}
