import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {
  
  }

  async ngOnInit() {
    
  }

  async testSchedule(){
    
    
  }

  

}


// await LocalNotifications.requestPermissions();
//     LocalNotifications.registerActionTypes({
//       types:[{
//         id:'CHAT_MSG',
//         actions:[{
//           id:'view',
//           title:'Open Chat',
//         },
//         {
//           id:'remove',
//           title:'Dismiss',
//           input:true,
//         },
//         {
//           id:'respond',
//           title:'respond',
//           input:true,
//         }]
//       }]
//     });


// await LocalNotifications.schedule({
//   notifications: [{
//     title:'Test title',//A moi plus tard, remplacer le titre par le nom de la personne qui nous à envoyer le message  
//     body:"test body",//Remplacer le corps par le texte envoyer par la personne
//     id:1,
//     iconColor:"#FF0000",
//     actionTypeId:'CHAT_MSG'
//   }]
// });