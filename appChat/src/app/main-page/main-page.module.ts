import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPagePage } from './main-page.page';
import { InfoUserModule } from '../info-user/info-user.module';
import { FinderModule } from '../finder/finder.module';
import { ListContactModule } from '../list-contact/list-contact.module';
import { MessageSpaceModule } from '../message-space/message-space.module';
import { InfoFriendModule } from '../info-friend/info-friend.module';
import { OptionNavModule } from '../option-nav/option-nav.module';
import { AddFriendModule } from '../add-friend/add-friend.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPagePageRoutingModule,
    InfoUserModule,
    FinderModule,
    ListContactModule,
    MessageSpaceModule,
    InfoFriendModule, 
    OptionNavModule,
    AddFriendModule    
  ],
  declarations: [MainPagePage]
})
export class MainPagePageModule {}
