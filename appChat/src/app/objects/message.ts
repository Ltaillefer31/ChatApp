export class Message{

    body:string;
    idSender:number;
    idAddressee:number;
    date:number;

    constructor(body, idSender, idAddressee){
        this.body = body;
        this.idSender = idSender;
        this.idAddressee = idAddressee;
        this.date = Date.now(); 
    }

    getBody(){
        return this.body;
    }

    getIdAddressee(){
        return this.idAddressee;
    }

    getIdSender(){
        return this.idSender;
    }

    getDate(){
        return this.date;
    }
}