import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  invalidLogin = false;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login(form){
    let jsonForm = {
      "email" : form.value['email'],
      "password" : form.value['password'],
      "isLogin" : true,
      "isLogout":false
    }

    this.authService.log(jsonForm)
    .subscribe(
      (data) => {
        if(data["isUserExist"]){
          // this.userService.reset();
          //on store les infos de l'utilisateur pour les réutilisé en cas de rafraichissement de la page
          localStorage.setItem("userData", JSON.stringify(data["userData"]));
          localStorage.setItem("tokenCsrf", data["tokenCsrf"]);
          localStorage.setItem("expirationTokenCrsf", data["expiresDate"]);
          localStorage.setItem("creationToken", data["creationDate"]);
          
          //mise a jour des infos user
          this.userService.majUser();

          //redirection vers la page principal
          this.router.navigate(['/main-page']);          
        }else{
          this.invalidLogin = true;
        }        
      },
      (error) => {
        console.log("#ERROR Login " + JSON.stringify(error));
      }
    )
  }

}
