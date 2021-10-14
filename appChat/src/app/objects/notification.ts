import { User } from "./user";

export class Notification{
    typeNotification: string;
    user:User;

    constructor(user:User, type:string) {
        this.typeNotification = type;
        this.user = user;
    }

    getUserNom(){
        return this.user.getNom();
    }

    getUserPrenom(){
        return this.user.getPrenom();
    }

    getUserId(){
        return this.user.getId();
    }


}