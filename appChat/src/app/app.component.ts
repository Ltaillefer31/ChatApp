import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService, private router: Router) {
    //pass
    let userConnected = this.userService.isUserConnected();

    /*Si l'utilisateur a encore une session valide alors
        mettre a jour les info et rediriger le user vers la page principale
    Sinon
        Ne rien mettre a jour et rediriger le user vers la page de login
    */
    if(userConnected){
      this.userService.majUser();
      this.router.navigate(['/main-page']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
