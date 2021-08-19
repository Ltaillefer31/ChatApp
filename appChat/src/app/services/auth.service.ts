import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    HOSTNAME:string = "http://localhost/apiAppChating/request/";
    HOSTNAME2:string = "http://localhost/AuthServer/request/"

    constructor(private httpClient: HttpClient){

    }

    login(form){
        let urlApi = this.HOSTNAME2.concat("login.php");
        
        return this.httpClient.post(urlApi,form);
    }

    signup(form){
        let urlApi = this.HOSTNAME.concat("AuthRequest/signup.php");
        
        return this.httpClient.post(urlApi,form);
    }
}