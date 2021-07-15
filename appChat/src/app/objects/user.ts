import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { Message } from "./message";

export class User {

    nom:string;
    prenom:string;
    id:string;
    status:string;
    messages:Message[] = new Array<Message>();


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

    getMessage(){
        return this.messages;
    }

    getMessageById(id){
        let arrReturnedMessage = new Array<Message>();
        for(let message of this.messages){
            if(message.getIdAddressee() == id){
                arrReturnedMessage.push(message);
            }
        }
        return arrReturnedMessage; 
    }
}