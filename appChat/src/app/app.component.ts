import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService, private socket:Socket) {
    // this.userService.disconnect();
    //pass
    //  let userConnected = this.userService.isUserConnected();

    //  if(userConnected) {
       //mise a jour des infos user
      //  this.userService.majUser();

       //redirection vers la page principal
    //    this.router.navigate(['/main-page']); 
    //  }else{
    //    this.router.navigate(['/login']);
    //  }
    /*Si l'utilisateur a encore une session valide alors
        mettre a jour les info et rediriger le user vers la page principale
    Sinon
        Ne rien mettre a jour et rediriger le user vers la page de login
    */
  }
}
