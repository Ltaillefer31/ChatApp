import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {

  listFriends:User[] = new Array<User>();
  listFriendSubscriptions:Subscription = new Subscription();

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.listFriendSubscriptions = this.userService.listFriendSubject
    .subscribe(
      (response) => {
        this.listFriends = response;
      },
      (err) => {
        console.log("error getting friend from user Service")
      }
    )
  }

  

}
