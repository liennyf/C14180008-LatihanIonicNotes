import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritepagePageRoutingModule } from './favoritepage-routing.module';

import { FavoritepagePage } from './favoritepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritepagePageRoutingModule
  ],
  declarations: [FavoritepagePage]
})
export class FavoritepagePageModule {}
