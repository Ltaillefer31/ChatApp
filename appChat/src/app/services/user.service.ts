import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
import { OnInit, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject, Subscription } from "rxjs";
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


    constructor(private communicationService: CommunicationService, private authService: AuthService, private router: Router) {     
        
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

    setFriend(id, user : User){
        this.idFriend = id;
        this.refreshMessageList();
        this.emitIdFriendSubject();
        this.emitFriendSubject(user);
    }

    majUser(){
        let userData = JSON.parse(localStorage.getItem("userData"));
        
        this.setUser(userData).then(() => {
            this.emitUserSubject();
        });
        this.refreshFriendList();
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
                // this.listFriends = new Array<User>();
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
                console.log("refresh message : " + JSON.stringify(response))
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

    isUserConnected(){
        let userConnected = false;
        if(localStorage.getItem("expirationTokenCrsf")){
            let expireToken = localStorage.getItem("expirationTokenCrsf");
            let actualDate = Math.floor(Date.now() / 1000);
            let userData = JSON.parse(localStorage.getItem("userData"));
            console.log(userData);

            if(typeof userData === "undefined"){
                console.log("userData non existante");
                userConnected = false;
            }else if (Number(expireToken) < actualDate){
                console.log("token CRSF expiré");
                userConnected = false;   
            }else{
                userConnected = true;
            }                
        }
        
        return userConnected;
    }

    setUser(info){
        return new Promise((resolve, reject) => {
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

    getNumberOfMessage(): number{
        let messageOfUserToFriend = this.user.getMessageById(this.idFriend);

        return messageOfUserToFriend.length;
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

    getFriendById(id){
        for(let friend of this.listFriends){
            if(friend.getId() == id){
                return friend;
            }
        }
    }   

    addMessage(text, idSender, idAddressee){
        this.user.addMessage(text, idSender, idAddressee);
        this.refreshMessageList();
    }

    addMessageForTest(){
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

        let friendId = friend.getId();
        let userId = this.user.getId();

        for(let i = 0; i < 4; i++){
            setTimeout(() => {
                friend.addMessage("test"+friendId, friendId, userId);
            }, 100);
            setTimeout(() => {
                this.user.addMessage("test"+userId, userId, friendId);
            }, 100);            
        }            
    }

    addFriend(idFriend){
        let url = "FriendRequest/addFriend.php";

        let formData = new FormData();

        formData.append("id1", this.getUserId());
        formData.append("id2", idFriend);

        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        let paramsJson = JSON.stringify(object);

        this.communicationService.requestToServer(url, paramsJson)
        .subscribe(
            (reponse) => {
                if(reponse["validOperation"]){
                    this.listFriends.push(new User("test2","test2",5));
                }
                console.log(reponse);
            },
            (err) => {
                console.log("##ERROR envoi de message" + JSON.stringify(err));
            }
        );        
    }

    checkForUpdate(){
        let url = "MessageRequest/compareNumberOfMessage.php";

        let formData = new FormData();

        formData.append("id1", this.user.getId());
        formData.append("id2", String(this.idFriend));
        formData.append("numberOfMessage", String(this.getNumberOfMessage()));

        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        let paramsJson = JSON.stringify(object);


        this.communicationService.requestToServer(url,paramsJson)
        .subscribe(
            (response) => {
                if(response["sameAmount"] == false){
                    this.refreshMessageList();
                }
            },
            (err) => {
                console.log("##ERROR " + JSON.stringify(err));
            }
        );
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
                this.router.navigate(['/login']);
            },
            (err) => {
                console.log("##ERROR not disconnect : " + JSON.stringify(err));
            }
        )
    }
}