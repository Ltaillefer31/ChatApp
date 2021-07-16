import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from '../objects/message';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-message-space',
  templateUrl: './message-space.component.html',
  styleUrls: ['./message-space.component.scss'],
})
export class MessageSpaceComponent implements OnInit {

  listMessages:Message[] = new Array<Message>();
  @Input() message:string;
  idFriend:number;
  idFriendSubcription: Subscription;

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.idFriendSubcription = this.userService.idFriendSubject
    .subscribe(
      (id:number) => {
        this.idFriend = id;
        this.getMessage();
      },
      (err) =>{
        console.log("##ERROR subsription" + JSON.stringify(err));
      },
      () => {
        console.log("complete");
      }
    )    
  }

  sendMsg(){
    this.userService.sendMsg(this.message, this.idFriend);
    this.getMessage();
    this.message="";
  }

  getMessage(){
    this.listMessages = this.userService.getMessage(this.userService.getFriendById(this.idFriend).getId());
  }


}
