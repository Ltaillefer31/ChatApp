import { Component, OnInit } from '@angular/core';
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

  constructor(private pageService: PageService) {
  }

  ngOnInit() {
    this.openAddFriendPageSubscription = this.pageService.openAddFriendPageSubject
    .subscribe( 
      (response : boolean) => {
        this.openAddFriendPage = response;
      }
    );
  }

  getOpenAddFriendPageValue(){
    return this.pageService.getOpenAddFriendPage();
  }

  goBack(){
    if(this.openAddFriendPage){
      this.pageService.setValueAddFriendPage(false);
    }
  }

}
