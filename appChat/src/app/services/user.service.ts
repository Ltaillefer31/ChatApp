import {HttpClient} from '@angular/common/http';

export class UserService{

    HOSTNAME:string = "http://localhost/apiAppChating/request/";

    constructor(private httpClient: HttpClient){

    }

    login(form){
        let urlApi = this.HOSTNAME.concat("login.php");
        
        return this.httpClient.post(urlApi,form);
    }

    signup(form){
        let urlApi = this.HOSTNAME.concat("addUser.php");
        
        return this.httpClient.post(urlApi,form);
    }




}