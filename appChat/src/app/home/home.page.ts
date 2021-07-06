import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private idCurrentUser;

  constructor() {
  
  }

  async ngOnInit() {

  }

  async testSchedule(){
    
    await LocalNotifications.schedule({
      notifications: [{
        title:'Test title',
        body:"test body",
        id:1,
        iconColor:"#FF0000",
      }]
    });
  }

  

}
