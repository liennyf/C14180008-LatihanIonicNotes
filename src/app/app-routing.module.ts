import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailpagePage } from './detailpage/detailpage.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detailpage',
    loadChildren: () => import('./detailpage/detailpage.module').then( m => m.DetailpagePageModule)
  },
  {
    path: 'detailpage/:index',
    component:DetailpagePage
  },
  {
    path: 'favoritepage',
    loadChildren: () => import('./favoritepage/favoritepage.module').then( m => m.FavoritepagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
