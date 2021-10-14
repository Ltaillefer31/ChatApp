import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService:AuthService, private userService:UserService, private router:Router) {
    let token = localStorage.getItem('tokenCsrf');
    let json = {
      "tokenCsrf":token
    };
    this.authService.verifyIfUserIsAuthenticated(json)
    .subscribe(
      (rep) => {
        if(rep["isUserExist"]){     
          let response = rep["userData"];
          localStorage.setItem("userData", JSON.stringify(response));
          
          //mise a jour des infos user
          this.userService.majUser();
        }else{
          console.log("user dont exist");
          this.router.navigate(['login']);
        }
      },
      (err) => {
        console.log("##ERROR auto login " + JSON.stringify(err));
      }
    )
    /*Si l'utilisateur a encore une session valide alors
        mettre a jour les info et rediriger le user vers la page principale
    Sinon
        Ne rien mettre a jour et rediriger le user vers la page de login
    */
  }
}
