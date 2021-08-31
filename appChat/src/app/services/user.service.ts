import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
import { OnInit, Injectable, NgZone } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { Message } from "../objects/message";
import { User } from "../objects/user";
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


    constructor(private communicationService: CommunicationService) {     
        
    }

    ngOnInit() {
        
    }

    emitIdFriendSubject(){
        this.idFriendSubject.next(this.idFriend);
    }

    emitUserSubject(){       
        this.userSubject.next(this.user);
        console.log("user Sended");
    }

    emitFriendSubject(user : User){ 
        this.friendSubject.next(user);
    }

    emitListMessage(){
        this.listMessageSubject.next(this.getMessage());
    }

    setFriend(id, user : User){
        this.idFriend = id;
        this.refreshMessageList();
        this.emitIdFriendSubject();
        this.emitFriendSubject(user);
    }

    majUser(){
        let userData = JSON.parse(sessionStorage.getItem("userData"));
        
        this.setUser(userData);
        setTimeout( () => {
            this.emitUserSubject();
        }, 200);
        this.refreshFriendList();
    }

    refreshFriendList(){
        let url = "FriendRequest/getAllFriends.php";

        let formData = new FormData();

        formData.append("id", this.user.getId());

        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        let paramsJson = JSON.stringify(object);

        this.communicationService.requestToServer(url, paramsJson)
        .subscribe(
            (response) => {
                for(let i = 0; i < response["records"].length; i++){
                    this.listFriends.push(new User(response["records"][i]["nom"], response["records"][i]["prenom"], response["records"][i]["id"]));
                }
            },
            (err) => {
                console.log("##ERROR rafraichissement list d'ami : " + JSON.stringify(err));
            }
        );
    }

    refreshMessageList(){
        let url = "MessageRequest/getMessageForId.php";

        let formData = new FormData();

        formData.append("id1", this.user.getId());
        formData.append("id2", String(this.idFriend));

        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        let paramsJson = JSON.stringify(object);

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

    isUserConnected(){
        let userConnected = true;
        let expireToken = sessionStorage.getItem("expirationTokenCrsf");
        let actualDate = Math.floor(Date.now() / 1000);
        let userData = JSON.parse(sessionStorage.getItem("userData"));

        if(typeof userData === "undefined"){
            console.log("userData non existante");
            userConnected = false;
        }else if (Number(expireToken) < actualDate){
            console.log("token CRSF expiré");
            userConnected = false;   
        }


        return userConnected;
    }

    setUser(info){
        this.user = new User(info["nom"], info["prenom"], info["id"]);
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

        let formData = new FormData();
        formData.append("idDestinataire", idAddressee);
        formData.append("idEnvoyeur", this.user.getId());
        formData.append("message", text);

        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        let paramsJson = JSON.stringify(object);


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

    addFriend(id1,id2){
        let url = "FriendRequest/addFriend.php";

        let formData = new FormData();

        formData.append("id1", id1);
        formData.append("id2", id2);

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
}