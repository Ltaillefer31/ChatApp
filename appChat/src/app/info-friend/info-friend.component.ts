import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-info-friend',
  templateUrl: './info-friend.component.html',
  styleUrls: ['./info-friend.component.scss'],
})
export class InfoFriendComponent implements OnInit {

  nameFriend: string;
  surnameFriend : string;

  friendSubscription: Subscription;
  friendUser: User;

  printInfoFriend : boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {  
    
    this.friendSubscription = this.userService.friendSubject
    .subscribe(
      (user:User) => {
        this.friendUser = user;
        this.nameFriend = this.friendUser.getNom();
        this.surnameFriend = this.friendUser.getPrenom();
        this.printInfoFriend = true;
        console.log("friend mis a jour");
      },
      (err) => {
        console.log("##ERROR Subscription user" + err);
      },
      () => {
        console.log("Subscription user terminé");
      }
    );

  }

  getNom(){
    if (typeof this.friendUser.getNom() === 'undefined') return null;
    return this.friendUser.getNom();
  }

  getPrenom(){
    if (typeof this.friendUser.getPrenom() === 'undefined') return null;
    return this.friendUser.getPrenom();
  }

  doesUserDataExist(){
    if(this.friendUser.getNom()) return true;
    return false;
  }

}
