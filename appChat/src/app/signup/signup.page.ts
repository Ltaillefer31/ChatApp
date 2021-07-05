import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signup(form){
    // var myForm = document.getElementById('myForm');
    var formData = new FormData();
    // formData.append('nom', form.value['nom']);
    formData.append('nom', form.value['nom']);
    formData.append('prenom', form.value['prenom']);
    formData.append('email', form.value['email']);
    formData.append('password', form.value['password']);
    console.log(formData);
  }

}
