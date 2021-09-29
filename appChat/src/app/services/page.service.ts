import { Subject } from "rxjs";

export class PageService{
    openAddFriendPage : boolean = false;
    openAddFriendPageSubject = new Subject();
    openNotificationsPage : boolean = false;
    openNotificationsPageSubject = new Subject();

    constructor(){}

    getOpenAddFriendPage(){
        return this.openAddFriendPage;
    }

    setValueAddFriendPage(value :boolean){
        this.openAddFriendPage = value;
        this.emitAddFriendPageSubject();
    }

    getOpenNotificationsPage(){
        return this.openNotificationsPage;
    }

    setValueNotificationsPage(value :boolean){
        this.openNotificationsPage = value;
        this.emitOpenNotificationsPageSubject();
    }

    emitAddFriendPageSubject(){
        this.openAddFriendPageSubject.next(this.openAddFriendPage);
    }

    emitOpenNotificationsPageSubject(){
        this.openNotificationsPageSubject.next(this.openNotificationsPage)
    }
}