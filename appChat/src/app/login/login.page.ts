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
    var formData = new FormData();

    formData.append('email', form.value['email']);
    formData.append('password', form.value['password']);

    this.authService.login(formData)
    .subscribe(
      (data) => {
        // console.log(data);
        if(data["isUserExist"]){
          //on store les infos de l'utilisateur pour les réutilisé en cas de rafraichissement de la page
          sessionStorage.setItem("userData", JSON.stringify(data["userData"]));
          sessionStorage.setItem("tokenCrsf", data["tokenCrsf"]);
          sessionStorage.setItem("expirationTokenCrsf", data["expiresDate"]);
          sessionStorage.setItem("creationToken", data["creationDate"]);

          this.userService.majUser();

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
