import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {

  listFriends:User[] = new Array<User>();

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.listFriends = this.userService.getFriendList();
  }

  

}
