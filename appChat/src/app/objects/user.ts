
export class User {

    nom:string;
    prenom:string;
    id:string;
    status:string;

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
}