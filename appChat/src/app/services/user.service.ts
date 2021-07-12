import { OnInit } from "@angular/core";
import { User } from "../objects/user";

export class UserService implements OnInit{

    user:User;

    constructor(){  

    }

    ngOnInit() {}

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


}