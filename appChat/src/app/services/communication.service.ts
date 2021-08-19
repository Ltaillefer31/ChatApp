import { OnInit } from "@angular/core";

export class CommunicationService implements OnInit{
    url :string = "http://localhost/AuthServer/request/verifyUser.php";

    constructor(){}

    ngOnInit(){}

    requestToServer(form){
        let url = "http://localhost/AuthServer/request/verifyUser.php"
    }
}