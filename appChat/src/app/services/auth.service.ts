import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    HOSTNAME:string = "http://localhost/apiAppChating/request/";

    constructor(private httpClient: HttpClient){

    }

    login(form){
        let urlApi = this.HOSTNAME.concat("UserRequest/login.php");
        
        return this.httpClient.post(urlApi,form);
    }

    signup(form){
        let urlApi = this.HOSTNAME.concat("UserRequest/signup.php");
        
        return this.httpClient.post(urlApi,form);
    }
}