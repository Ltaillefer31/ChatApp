import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Notification } from '../objects/notification';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {

  notificationSubscription: Subscription = new Subscription();
  notifAskFriend: Notification[];

  constructor(private userService: UserService) {
    console.log("constructor notif page"); 
    this.notifAskFriend = this.userService.getNotif();
    this.notificationSubscription = this.userService.notifSubject
    .subscribe(
      (notifTab: Notification[]) => {
        this.notifAskFriend = notifTab;
      },
      (err) => {
        console.log("error receive notif");
      }
    )  
  }

  ngOnInit() {}

  accept(notif){
    console.log(notif)
    this.userService.acceptFriend(notif.getUserId());
  }

  refuse(notif){
    console.log(notif);
    this.userService.refuseFriend(notif.getUserId());
  }

}
