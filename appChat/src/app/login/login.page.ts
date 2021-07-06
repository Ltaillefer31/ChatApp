import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form){
    var formData = new FormData();

    formData.append('email', form.value['email']);
    formData.append('password', form.value['password']);

    this.authService.login(formData)
    .subscribe(
      (data) =>{
        console.log(data);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log("#ERROR Login " + JSON.stringify(error));
      }
    )
  }

}
