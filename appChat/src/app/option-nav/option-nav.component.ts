import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-option-nav',
  templateUrl: './option-nav.component.html',
  styleUrls: ['./option-nav.component.scss'],
})
export class OptionNavComponent implements OnInit {

  numberOfNotifications: number = 18;

  constructor(private pageService: PageService, private userService: UserService) { }

  ngOnInit() {
  }

  test(){
    console.log("working");
  }

  setValueAddFriendPage(){
    this.pageService.setValueAddFriendPage(true);
  }

  setValueNotificationsPage(){
    this.pageService.setValueNotificationsPage(true);
  }

  disconnect(){
    this.userService.disconnect();
  }

}
