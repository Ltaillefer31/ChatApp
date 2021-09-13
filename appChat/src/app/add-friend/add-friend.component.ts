import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {

  @Input() idFriend: string;

  constructor(private userService: UserService) { }

  ngOnInit() {}

  getIdUser() { return this.userService.getUserId()}

  verifyInputBeforeAddingFriend(){
    if(this.idFriend != "" && Number(this.idFriend)){
      console.log("yes");
      this.addFriend();
    }else{
      console.log("nop"); 
    }
  }

  addFriend(){
    this.userService.addFriend(this.idFriend);
  }


}
