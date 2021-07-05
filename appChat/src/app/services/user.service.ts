import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService{

    HOSTNAME:string = "http://localhost/apiAppChating/request/";

    constructor(private httpClient: HttpClient){

    }

    login(form){
        let urlApi = this.HOSTNAME.concat("UserRequest/login.php");
        
        return this.httpClient.post(urlApi,form);
    }

    signup(form){
        let urlApi = this.HOSTNAME.concat("UserRequest/addUser.php");
        
        return this.httpClient.post(urlApi,form);
    }
}