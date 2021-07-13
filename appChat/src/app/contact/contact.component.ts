import { Component, Input, OnInit } from '@angular/core';
import { User } from '../objects/user';

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

  constructor() {
    
  }

  ngOnInit() {
    this.friendUser = new User(this.nom, this.prenom, this.id);
    console.log(this.friendUser);
  }

  showDetails(){
    console.log(this.friendUser);
  }

}
