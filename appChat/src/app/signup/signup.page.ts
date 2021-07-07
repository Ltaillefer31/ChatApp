import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  async signup(form){
    var formData = new FormData();

    formData.append('nom', form.value['nom']);
    formData.append('prenom', form.value['prenom']);
    formData.append('email', form.value['email']);
    formData.append('password', form.value['password']);
    
    this.authService.signup(formData)
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log("##ERROR signup" + JSON.stringify(err));
      }
    )
  }

}
