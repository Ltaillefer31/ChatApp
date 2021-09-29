import { Message } from "./message";
import {Notification } from "./notification";

export class User {

    nom:string;
    prenom:string;
    id:string;
    status:string;
    messages:Message[] = new Array<Message>();
    notifications:Notification[] = new Array<Notification>();


    constructor(nom,prenom,id){
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
        this.status = "Hors Ligne";
    }

    getNom(){
        return this.nom;
    }

    getPrenom(){
        return this.prenom;
    }

    getId(){
        return this.id;
    }

    getStatus(){
        return this.status;
    }

    addMessage(text, idExp, idDes){
        this.messages.push(new Message(text, idExp, idDes));
    }

    eraseMessage(){
        this.messages = new Array<Message>();
    }

    getAllMessage(){
        return this.messages;
    }

    getMessageById(id){
        let arrReturnedMessage = new Array<Message>();
        for(let message of this.messages){
            if(message.getIdAddressee() == id || message.getIdSender() == id){
                arrReturnedMessage.push(message);
            }
        }
        return arrReturnedMessage; 
    }

    addNotification(user, typeNotif){
        this.notifications.push(new Notification(user, typeNotif));
    }

    eraseNotification(){
        this.notifications = new Array<Notification>();
    }

    getNotification(){
        return this.notifications;
    }


}