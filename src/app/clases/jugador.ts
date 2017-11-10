export class Jugador {
    
    email : string;
    clave : string;

    constructor(mail? : string, clave?: string)
    {
        this.email = mail;
        this.clave = clave;
    }
}
