import { Juego } from '../clases/juego'
/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
export class JuegoPaices extends  Juego {
    
    respuestaJugador:string;
    respuestaVerdadera:string;
    opcion1:string;
    opcion2:string; 
    opcion3:string;
    opcion4:string;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super(nombre,gano,jugador);
     
    
      
      }

    public verificar() {
        if (this.respuestaJugador == this.respuestaVerdadera) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     
     

      
}
