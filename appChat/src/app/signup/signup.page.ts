import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signup(form){
    // var myForm = document.getElementById('myForm');
    console.log(form.value);
    var formData = new FormData();
    // formData.append('nom', form.value['nom']);
    formData.append('nom', form.value['nom']);
    formData.append('prenom', form.value['prenom']);
    formData.append('email', form.value['email']);
    formData.append('password', form.value['password']);
    
    this.userService.signup(formData)
    .subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log("##ERROR signup" + JSON.stringify(err));
      }
    )
  }

}
