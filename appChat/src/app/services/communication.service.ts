import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CommunicationService implements OnInit{
    url :string = "http://localhost:3000/verifyUser";

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    requestToServer(url, json){

        let tokenCsrf = localStorage.getItem('tokenCsrf');
        
        let sendJson = {
            "params":JSON.parse(json),
            "wayToGo": url,
            "token": tokenCsrf
        }
        // console.log(sendJson)


        return this.httpClient.post(this.url, sendJson, {withCredentials: true});
    }
}