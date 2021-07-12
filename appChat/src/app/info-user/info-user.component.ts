import { Component, Input, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {

  currentUser:User;
  @Input()imgUrl: string;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getUser();
  }

  ngOnInit() {}

  updateUrl(event){
    console.log(event);
    this.imgUrl = "/assets/img/1.jpg";
  }

}
