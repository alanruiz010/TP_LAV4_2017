import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegoPaices } from '../../clases/juego-paices';


@Component({
  selector: 'app-trivia-paices',
  templateUrl: './trivia-paices.component.html',
  styleUrls: ['./trivia-paices.component.css']
})
export class TriviaPaicesComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  i:number;
  miArrayPaices : Array<any>;
  Mensajes:string;
  pais:string;
 
  Bandera:string;
  
  BloquearBotones:boolean;
  nuevoJuego: JuegoPaices;
  
 
constructor(public miServicio : JuegoServiceService) {
       
          
    
    this.CargarArrays();
    this.GenerarPregunta();
  }

GenerarPregunta(){
  this.nuevoJuego = new JuegoPaices("Trivia Paices",false,"Alan");
  this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
  this.i =Math.floor(Math.random() * 4) ;

  this.pais = this.miArrayPaices[this.i];

  this.nuevoJuego.opcion1 = this.pais['Opcion1'];
  this.nuevoJuego.opcion2 = this.pais['Opcion2'];
  this.nuevoJuego.opcion3 = this.pais['Opcion3'];
  this.nuevoJuego.opcion4 = this.pais['Opcion4'];

  this.nuevoJuego.respuestaVerdadera = this.pais['Correcta'];
  this.Bandera = this.pais['Correcta'];
  this.BloquearBotones = false;

}

Opcion1(){
  this.nuevoJuego.respuestaJugador = this.pais['Opcion1'];
  if(this.nuevoJuego.verificar())
  {
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Perfecto", true);
   }
   else{
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Erraste");
   }
   this.BloquearBotones = true;
}
Opcion2(){
  this.nuevoJuego.respuestaJugador = this.pais['Opcion2'];
  if(this.nuevoJuego.verificar())
  {
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Perfecto", true);
   }
   else{
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Erraste");
   }
   this.BloquearBotones = true;
}
Opcion3(){
  this.nuevoJuego.respuestaJugador = this.pais['Opcion3'];
  if(this.nuevoJuego.verificar())
  {
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Perfecto", true);
   }
   else{
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Erraste");
   }
   this.BloquearBotones = true;
}
Opcion4(){
  this.nuevoJuego.respuestaJugador = this.pais['Opcion4'];
  if(this.nuevoJuego.verificar())
  {
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Perfecto", true);
   }
   else{
    this.enviarJuego.emit(this.nuevoJuego);
    this.MostarMensaje("Erraste");
   }
   this.BloquearBotones = true;
}

 

  CargarArrays()
  {
    this.miArrayPaices=new Array<any>();

    this.miArrayPaices.push({"Opcion1":"Brazil","Opcion2":"Iran","Opcion3":"Armenia","Opcion4":"Francia","Correcta":"Brazil"});
    this.miArrayPaices.push({"Opcion1":"Argentina","Opcion2":"Italia","Opcion3":"Nicaragua","Opcion4":"Alemania","Correcta":"Nicaragua"});
    this.miArrayPaices.push({"Opcion1":"Turquia","Opcion2":"Camerun","Opcion3":"Bolivia","Opcion4":"Paraguay","Correcta":"Camerun"});
    this.miArrayPaices.push({"Opcion1":"Belgica","Opcion2":"Japon","Opcion3":"Rusia","Opcion4":"Peru","Correcta":"Belgica"});
    this.miArrayPaices.push({"Opcion1":"Inglaterra","Opcion2":"Argentina","Opcion3":"Holanda","Opcion4":"Serbia","Correcta":"Argentina"});
    this.miArrayPaices.push({"Opcion1":"Cuba","Opcion2":"Mongolia","Opcion3":"Ucrania","Opcion4":"Peru","Sudafrica":"Cuba"});
    
    console.log(this.miArrayPaices);  
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
  
   }  
  ngOnInit() {
  }

}
