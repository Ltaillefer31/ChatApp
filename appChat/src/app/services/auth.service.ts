import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    HOSTNAME:string = "http://localhost/apiAppChating/request/";
    HOSTNAME2:string = "http://localhost:3000/"

    constructor(private httpClient: HttpClient){

    }

    log(form){
        let urlApi = this.HOSTNAME2.concat("login");

        
        return this.httpClient.post(urlApi,form,{withCredentials:true});
    }

    signup(form){
        let urlApi = this.HOSTNAME.concat("AuthRequest/signup.php");
        
        return this.httpClient.post(urlApi,form);
    }

    disconnect(){
        let urlApi = this.HOSTNAME2.concat("disconnect");

        return this.httpClient.post(urlApi,{withCredentials:true});
    }

    verifyIfUserIsAuthenticated(form){
        let url = this.HOSTNAME2.concat("verifyIfUserConnected");

        return this.httpClient.post(url,form,{withCredentials:true});
    }
}