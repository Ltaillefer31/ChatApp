import { OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Message } from "../objects/message";
import { User } from "../objects/user";

export class UserService implements OnInit{

    user:User;
    listFriends:User[] = new Array<User>();
    idFriend:number = 4;
    idFriendSubject = new Subject<number>();

    constructor(){ 
        this.user = new User("Louis", "Taillefer",2); 
        this.listFriends.push(new User("Coddy", "Fisher", 4));
        this.listFriends.push(new User("Annie", "Fisher", 5));
        this.listFriends.push(new User("Steph", "Fisher", 6));
        this.listFriends.push(new User("Joel", "Fisher", 7));
        this.emitFriendSubject();
        this.addMessage();
    }

    ngOnInit() {
        
    }

    emitFriendSubject(){
        this.idFriendSubject.next(this.idFriend);
    }

    setUser(info){
        this.user = new User(info["nom"], info["prenom"], info["id"]);
    }

    setIdFriend(id){
        this.idFriend = id;
        // this.addMessageForId(this.idFriend);
        this.emitFriendSubject();        
    }
    
    getUser(){
        return this.user;
    }

    getFriendList(){
        return this.listFriends;
    }

    getMessage(idAddressee){
        let returnedMessage = new Array();
        //Recupération des messages du user vers ami
        let messageOfFriendtoUser = this.getFriendById(idAddressee).getMessageById(this.user.getId());
        //Récuperation des messages de ami vers user
        let messageOfUserToFriend = this.user.getMessageById(this.idFriend);

        //Concaténation des deux arrays
        returnedMessage = messageOfUserToFriend.concat(messageOfFriendtoUser);
        //Trier les messages par date
        returnedMessage.sort((a,b) => a.date - b.date );
        return returnedMessage;
        
    }

    sendMsg(text,idAddressee){
        this.user.addMessage(text, this.user.getId(),idAddressee);
    }

    getFriendById(id){
        for(let friend of this.listFriends){
            if(friend.getId() == id){
                return friend;
            }
        }
    }   

    addMessage(){
        for(let userFriend of this.listFriends){
            for(let i = 0; i < 5; i++){
                setTimeout(() => {
                    userFriend.addMessage("test"+userFriend.getId(), userFriend.getId(), this.user.getId());
                }, 100);
                setTimeout(() => {
                    this.user.addMessage("test"+this.user.getId(), this.user.getId(), userFriend.getId());
                }, 100); 
            }            
        }
    }

    addMessageForId(id){
        let friend = this.getFriendById(id);
        for(let i = 0; i < 4; i++){
            setTimeout(() => {
                friend.addMessage("test"+friend.getId(), friend.getId(), this.user.getId());
            }, 100);
            setTimeout(() => {
                this.user.addMessage("test"+this.user.getId(), this.user.getId(), friend.getId());
            }, 100);            
        }            
    }

    


}