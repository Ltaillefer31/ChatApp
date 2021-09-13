import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  listMessagesSubscription: Subscription;

  constructor(private userService:UserService) {}

  ngOnInit() {

    // setInterval(() => {
    //   this.userService.checkForUpdate();
    // }, 250);


    this.idFriendSubcription = this.userService.idFriendSubject
    .subscribe(
      (id:number) => {
        this.idFriend = id;
      },
      (err) =>{
        console.log("##ERROR subsription id" + JSON.stringify(err));
      },
      () => {
        console.log("complete");
      }
    );
    
    this.listMessagesSubscription = this.userService.listMessageSubject
    .subscribe(
      (listMessage) => {
        this.listMessages = listMessage;
        // console.log(this.listMessages);
      },
      (error) => {
        console.log("##ERROR récupération des messages : " + JSON.stringify(error));
      }
    );
  }

  sendMsg(){
    if(this.message != ""){
      this.userService.sendMsg(this.message, this.idFriend)
      .subscribe(
        (reponse) => {
            this.userService.addMessage(this.message, this.userService.getUserId(),this.idFriend);
            this.message="";
        },
        (err) => {
            console.log("##ERROR envoi de message" + JSON.stringify(err));
        }
      );
    }    
  }

  getMessage(){
    this.listMessages = this.userService.getMessage();
    console.log("passe par message-space ");
  }

}
