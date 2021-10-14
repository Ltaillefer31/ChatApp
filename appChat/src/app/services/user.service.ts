import { OnInit, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { Socket } from "ngx-socket-io";
import { Subject } from "rxjs";
import { Message } from "../objects/message";
import { User } from "../objects/user";
import { AuthService } from "./auth.service";
import { CommunicationService } from "./communication.service";

@Injectable()
export class UserService implements OnInit{

    user:User;
    listFriends:User[] = new Array<User>();
    idFriend:number = null;
    idFriendSubject = new Subject<number>();

    userSubject = new Subject<User>();
    friendSubject = new Subject<User>();
    listMessageSubject = new Subject<Message[]>();
    listFriendSubject = new Subject<User[]>();
    notifSubject = new Subject();
    numberNotifSubject = new Subject<number>();

    listNotifs = [];


    constructor(private communicationService: CommunicationService, private authService: AuthService, private router: Router, private socket:Socket) {     
        
    }

    ngOnInit() {
    }

    reset(){
        localStorage.removeItem('userData');
        localStorage.removeItem('tokenCsrf');
        localStorage.removeItem('expirationTokenCrsf');
        localStorage.removeItem('creationToken');
        this.listFriends = [];
    }

    emitIdFriendSubject(){
        this.idFriendSubject.next(this.idFriend);
    }

    emitUserSubject(){       
        this.userSubject.next(this.user);
    }

    emitFriendSubject(user : User){ 
        this.friendSubject.next(user);
    }

    emitListMessage(){
        this.listMessageSubject.next(this.getMessage());
    }
    
    emitListFriend(){
        this.listFriendSubject.next(this.listFriends)
    }

    emitNotifSubject(){
        console.log("notif send")
        this.notifSubject.next(this.listNotifs);
    }

    emitNumberNotifSuject(){
        this.numberNotifSubject.next(this.listNotifs.length);
    }

    setFriend(id, user : User){
        this.idFriend = id;
        this.refreshMessageList();
        this.emitIdFriendSubject();
        this.emitFriendSubject(user);
    }

    majUser(){
        let userData = JSON.parse(localStorage.getItem("userData"));
        
        this.setUser(userData).then(() => {
            console.log("user Set");
            this.refreshFriendList();
            setTimeout(() => {
                this.refreshNotification();  
            },50);
            this.socket.connect();
            setTimeout(() => {
                this.emitUserSubject();
            }, 50);
        });
        
        this.socket.on("channel"+this.user.getId(), (rep) => {
            console.log("refresh friend");
            this.refreshMessageList();
            this.refreshFriendList();
        });

        this.socket.on("channelNotif"+this.user.getId(), (rep)=>{
            console.log("refresh Notif");
            this.refreshNotification();
        });
    }

    refreshFriendList(){ 
        let url = "FriendRequest/getAllFriends.php";

        let jsonSend = {
            "id": this.user.getId()
        }
        
        let paramsJson = JSON.stringify(jsonSend);

        this.communicationService.requestToServer(url, paramsJson)
        .subscribe(
            (response) => {
                console.log(response)
                this.listFriends = new Array<User>();
                for(let i = 0; i < response["records"].length; i++){
                    this.listFriends.push(new User(response["records"][i]["nom"], response["records"][i]["prenom"], response["records"][i]["id"]));
                }
                this.emitListFriend()
            },
            (err) => {
                console.log("##ERROR rafraichissement list d'ami : " + JSON.stringify(err));
            }
        );
    }

    refreshMessageList(){
        let url = "MessageRequest/getMessageForId.php";

        let jsonSend = {
            "id1" : this.user.getId(),
            "id2":String(this.idFriend)
        }
        
        let paramsJson = JSON.stringify(jsonSend);

        this.communicationService.requestToServer(url, paramsJson)
        .subscribe(
            (response) => {
                this.user.eraseMessage();
                for(let i = 0; i < response["records"].length; i++){
                    this.user.addMessage(response["records"][i]["Message"],response["records"][i]["Sender"],response["records"][i]["Addressee"]);
                }
                this.emitListMessage();
            },
            (err) => {
                console.log("##ERROR rafraichissement message list : " + JSON.stringify(err));
            }
        );
    }

    refreshNotification(){
        let url = "FriendRequest/getAllNotif.php";

        let jsonSend = {
            "id" : this.user.getId()
        };

        let paramsJson = JSON.stringify(jsonSend);

        this.communicationService.requestToServer(url, paramsJson)
        .subscribe(
            (response) => {
                console.log("refresh Notif in refreshNotification()");
                this.user.eraseNotification();
                for(let i = 0; i < response["records"].length; i++){
                    let friendUser = new User(response["records"][i]["nom"], response["records"][i]["prenom"], response["records"][i]["id"]);
                    this.user.addNotification(friendUser, "friendInvit");
                }
                this.listNotifs = this.user.getNotification();
                this.emitNotifSubject();
                this.emitNumberNotifSuject();
            },
            (err) => {
                console.log("##ERROR Rafraichissement notifs " + JSON.stringify(err));
            }
        )
    }

    setUser(info){
        return new Promise((resolve, reject) => {
            console.log("user getting set");
            this.user = new User(info["nom"], info["prenom"], info["id"]);
            resolve("done")
        })
    }
    
    getUser(){
        return this.user;
    }

    getUserId(){
        return this.user.getId();
    }

    getFriendId(){
        return this.idFriend;
    }

    getFriendList(){
        return this.listFriends;
    }

    getMessage(){
        //Récuperation des messages de ami vers user
        let messageOfUserToFriend = this.user.getMessageById(this.idFriend);
        messageOfUserToFriend.sort((a,b) => a.date - b.date );

        return messageOfUserToFriend;
        
    }

    sendMsg(text,idAddressee){
        let url = "MessageRequest/addMessage.php";

        let jsonSend = {
            "idDestinataire":idAddressee,
            "idEnvoyeur":this.user.getId(),
            "message":text
        }
        
        let paramsJson = JSON.stringify(jsonSend);


        return this.communicationService.requestToServer(url, paramsJson);
    }  

    addMessage(text, idSender, idAddressee){
        this.user.addMessage(text, idSender, idAddressee);
        this.refreshMessageList();
    }

    addFriend(idFriend){
        let url = "FriendRequest/askFriend.php";

        let json = {
            "id1": this.user.getId(),
            "id2":idFriend
        }

        let jsonParams = JSON.stringify(json);

        this.communicationService.requestToServer(url, jsonParams)
        .subscribe(
            (reponse) => {
                // if(reponse["validOperation"]){
                //     this.listFriends.push(new User("test2","test2",5));
                // }
                console.log(reponse);
                this.tellUserToRefreshNotif(idFriend);
            },
            (err) => {
                console.log("##ERROR envoi de message" + JSON.stringify(err));
            }
        );        
    }

    tellUserToRefreshFriend(idFriend){
        this.socket.emit("refreshMessageForId",idFriend);
    }

    tellUserToRefreshNotif(idFriend){
        console.log("test refresh notif");
        this.socket.emit("refreshNotificationForId", idFriend);
    }

    disconnect(){
        let json = {
            "isLogin": false,
            "isLogout" :true
        }

        this.authService.log(json)
        .subscribe( 
            (response) => {
                console.log(response["message"]);
                this.reset();
                this.socket.disconnect();
                this.router.navigate(['/login']);
            },
            (err) => {
                console.log("##ERROR not disconnect : " + JSON.stringify(err));
            }
        )
    }

    acceptFriend(idFriend){
        let url = "FriendRequest/acceptFriend.php"; 

        let json={
            "id1":this.user.getId(),
            "id2":idFriend,
            "answer":true
        };

        let jsonParams = JSON.stringify(json);

        this.communicationService.requestToServer(url, jsonParams)
        .subscribe(
            (response) => {
                console.log(response);
                this.refreshFriendList();
                this.refreshNotification();
                this.tellUserToRefreshFriend(idFriend);
            },
            (err) => {
                console.log("##ERROR acceptFriend " + JSON.stringify(err))
            }
        )
    }

    refuseFriend(idFriend){
        let url = "FriendRequest/acceptFriend.php"; 

        let json={
            "id1":this.user.getId(),
            "id2":idFriend,
            "answer":false
        };

        let jsonParams = JSON.stringify(json);

        this.communicationService.requestToServer(url, jsonParams)
        .subscribe(
            (response) => {
                console.log(response);
                this.refreshNotification();
            },
            (err) => {
                console.log("##ERROR refuse Friend " + JSON.stringify(err))
            }
        )
    }

    getNotif(){
        return this.listNotifs;
    }
}