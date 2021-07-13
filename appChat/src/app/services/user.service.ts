import { OnInit } from "@angular/core";
import { User } from "../objects/user";

export class UserService implements OnInit{

    user:User;
    listFriends:User[] = new Array<User>();

    constructor(){  
        this.listFriends.push(new User("Coddy", "Fisher", 4));
        this.listFriends.push(new User("Annie", "Fisher", 5));
        this.listFriends.push(new User("Steph", "Fisher", 6));
        this.listFriends.push(new User("Joel", "Fisher", 7));
    }

    ngOnInit() {
        
    }

    sendMsg(){

    }

    addFriend(){

    }

    setUser(info){
        this.user = new User(info["nom"], info["prenom"], info["id"]);
    }
    
    getUser(){
        return this.user;
    }

    getFriendList(){
        return this.listFriends;
    }

    addMessageForCurrentUser(){
        for(let i = 0; i < 10;i++){
            this.user.messages.push("test"+i);
        }
    }

    addMessageForUser(){
        for(let friend of this.listFriends){
          for(let i = 0; i < 10;i++){
            friend.messages.push("test"+i);
          }
        }
      }


}