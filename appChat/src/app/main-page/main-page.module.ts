import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPagePage } from './main-page.page';
import { InfoUserModule } from '../info-user/info-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPagePageRoutingModule,
    InfoUserModule
  ],
  declarations: [MainPagePage]
})
export class MainPagePageModule {}
