import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageService } from '../services/page.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-option-nav',
  templateUrl: './option-nav.component.html',
  styleUrls: ['./option-nav.component.scss'],
})
export class OptionNavComponent implements OnInit {

  numberOfNotifications: number = 18;
  numberOfNotificationsSubscription: Subscription = new Subscription();

  constructor(private pageService: PageService, private userService: UserService) { }

  ngOnInit() {
    this.numberOfNotificationsSubscription = this.userService.numberNotifSubject
    .subscribe( 
      (nbNotif) => {
        this.numberOfNotifications = nbNotif;
      },
      (err) => {
        console.log("##ERROR recup number of Notif " + JSON.stringify(err));
      }
    )
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
