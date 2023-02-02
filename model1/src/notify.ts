import Client from "./client";

export default class Notify{

    constructor (private client: Client){

    }

    sendEmail(): boolean{
        console.log("enviando")
        this.client.email;
        return true;
    
    }

}