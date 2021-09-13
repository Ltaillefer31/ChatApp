import { Subject } from "rxjs";

export class PageService{
    openAddFriendPage : boolean = false;
    openAddFriendPageSubject = new Subject();

    constructor(){}

    getOpenAddFriendPage(){
        return this.openAddFriendPage;
    }

    setValueAddFriendPage(value :boolean){
        this.openAddFriendPage = value;
        this.emitAddFriendPageSubject();
    }

    emitAddFriendPageSubject(){
        this.openAddFriendPageSubject.next(this.openAddFriendPage);
    }
}