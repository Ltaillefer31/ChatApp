
export class User {

    nom:string;
    prenom:string;
    id:string;
    status:string;
    messages:string[] = new Array<string>();

    // private listFriend:User = new Array();


    constructor(nom,prenom,id){
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
        this.status = "Hors Ligne";
    }

    getNom(){
        return this.nom;
    }

    getPrenom(){
        return this.prenom;
    }

    getId(){
        return this.id;
    }

    getStatus(){
        return this.status;
    }

    getMessageByString(string){

    }

    getMessage(){
        return this.messages;
    }
}