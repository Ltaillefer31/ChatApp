import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {

  currentUser:User;
  nomUser:string;
  prenomUser:string;
  @Input() imgUrl: string;

  userSubscription: Subscription;


  constructor(private userService: UserService) {
  }

  ngOnInit() {  
    
    this.userSubscription = this.userService.userSubject
    .subscribe(
      (user:User) => {
        this.currentUser = user;
        this.nomUser = this.currentUser.getNom();
        this.prenomUser = this.currentUser.getPrenom();
        console.log("user mis a jour");
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
    if (typeof this.currentUser.getNom() === 'undefined') return null;
    return this.currentUser.getNom();
  }

  getPrenom(){
    if (typeof this.currentUser.getPrenom() === 'undefined') return null;
    return this.currentUser.getPrenom();
  }

  doesUserDataExist(){
    if(this.currentUser.getNom()) return true;
    return false;
  }

}
