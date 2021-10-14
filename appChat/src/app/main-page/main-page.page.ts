import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subscription } from 'rxjs';
import { PageService } from '../services/page.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  openAddFriendPage : boolean = false;
  openAddFriendPageSubscription = new Subscription();
  openNotificationsPage : boolean = false;
  openNotificationsPageSubscription = new Subscription();
  messageSpaceOpen : boolean = false;

  constructor(private pageService: PageService) {
  }

  ngOnInit() {
    this.openAddFriendPageSubscription = this.pageService.openAddFriendPageSubject
    .subscribe( 
      (response : boolean) => {
        this.openAddFriendPage = response;
      }
    );

    this.openNotificationsPageSubscription = this.pageService.openNotificationsPageSubject
    .subscribe( 
      (response : boolean) => {
        this.openNotificationsPage = response;
      }
    );


  }

  getOpenAddFriendPageValue(){
    return this.pageService.getOpenAddFriendPage();
  }

  goBack(){
    if(this.openAddFriendPage){
      this.pageService.setValueAddFriendPage(false);
    }else if(this.openNotificationsPage){
      this.pageService.setValueNotificationsPage(false);
    }
  }
  
  openContact(){
    this.messageSpaceOpen = !this.messageSpaceOpen;
  }

}
