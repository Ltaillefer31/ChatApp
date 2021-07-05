import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(form){
    var formData = new FormData();

    formData.append('email', form.value['email']);
    formData.append('password', form.value['password']);

    this.userService.login(formData)
    .subscribe(
      (data) =>{
        console.log(data);
      },
      (error) => {
        console.log("#ERROR Login " + JSON.stringify(error));
      }
    )
  }

}
