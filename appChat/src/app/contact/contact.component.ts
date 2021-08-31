import { Component, Input, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  @Input() nom:string;
  @Input() prenom:string;
  @Input() id:number;
  friendUser:User;

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.friendUser = new User(this.nom, this.prenom, this.id);
  }

  connectToFriend(){
    if(this.userService.getFriendId() != this.id){
      this.userService.setFriend(this.friendUser.getId(), this.friendUser);
    }
  }

}
