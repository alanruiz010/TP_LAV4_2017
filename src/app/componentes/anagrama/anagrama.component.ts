/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  miPalabra:any;
  Palabras:any;
  miJuego:JuegoAnagrama;
  @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  
    ocultarVerificar: boolean;
    Tiempo: number;
    repetidor:any;
    private subscription: Subscription;
    Mensajes:string;

  constructor(private serv : JuegoServiceService) {
    this.miJuego = new JuegoAnagrama();
    
    this.miJuego.jugador = this.serv.TraerUsuario();
    this.miJuego.desordenada = "Presiona el Boton";
    this.ocultarVerificar=true;
   }

  GenerarNuevo(){
    this.ocultarVerificar=false;
    this.miJuego = new JuegoAnagrama();
    
    this.miJuego.jugador = this.serv.TraerUsuario();
    this.miPalabra = this.Palabras[Math.floor((Math.random() * 32) )];
    this.miJuego.palabra = this.miPalabra["palabra"];
    this.miJuego.desordenada = this.miPalabra["desordenada"];

 }

 Verificar(){
   if(this.miJuego.verificar())
   {
    this.enviarJuego.emit(this.miJuego);
     console.log(this.miJuego);
     this.ocultarVerificar=true;
   }
   else 
   {
   this.enviarJuego.emit(this.miJuego);
    console.log(this.miJuego);
    this.ocultarVerificar=true;
   }
 }



  ngOnInit() {

      this.serv.TraerPalabas().then(data => { this.Palabras = data; });
     
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
  
}
