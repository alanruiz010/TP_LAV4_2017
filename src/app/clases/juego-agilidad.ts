//export class JuegoAgilidad {
//}
//===================================
import { Juego } from '../clases/juego'

export class JuegoAgilidad extends  Juego {
    
numero1:number;
numero2:number;
operador:number;
numeroIngresado:number;
resulatdoReal: number;
resultadoParticipante: number;
operardorMostrar: string;

constructor(nombre?:string,gano?:boolean,jugador?:string)
{
    super("Agilidad Aritmetica", gano,jugador)
    
    
    this.resultadoParticipante=0;
    
      
      
}

  generarNuevo()
  {
      this.numero1= Math.floor(Math.random()*10);
      this.numero2= Math.floor(Math.random()*10);
      this.operador= Math.floor(Math.random()*4);

      if(this.operador == 0){
          this.operardorMostrar = "+";
          this.resulatdoReal = this.numero1 + this.numero2;
       }
      if(this.operador == 1){
          this.operardorMostrar = "-";
          this.resulatdoReal = this.numero1 - this.numero2;
      }
      if(this.operador == 2){
          this.operardorMostrar = "/";
          this.resulatdoReal = this.numero1 / this.numero2;
      }
      if(this.operador == 3){
          this.operardorMostrar = "x";
          this.resulatdoReal = this.numero1 * this.numero2;
      }
        console.info(this.numero1 +this.operardorMostrar+this.numero2+"="+this.resulatdoReal); 
  }




 public verificar()
  {     
    
      if(this.resulatdoReal==this.resultadoParticipante)
      {
        this.gano = true;
      }
      if (this.gano) {
        return true;
      } else {
        return false;
      
      }
      
      
    }
}
