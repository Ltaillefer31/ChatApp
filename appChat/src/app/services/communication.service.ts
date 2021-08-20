import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CommunicationService implements OnInit{
    url :string = "http://localhost/AuthServer/request/verifyUser.php";

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    requestToServer(url, json){
        let tokenCrsf = sessionStorage.getItem('tokenCrsf');

        let formDataSendToServer = new FormData();

        formDataSendToServer.append('params', json);
        formDataSendToServer.append('pathToGo', url);
        formDataSendToServer.append('tokenCrsf', tokenCrsf);


        return this.httpClient.post(this.url, formDataSendToServer);
    }
}