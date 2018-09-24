import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
//=================
import { JuegoServiceService } from '../../servicios/juego-service.service';



@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})


export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 

  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;
  private subscription: Subscription;

  ngOnInit() {
  }
  //==========original=============================0

  // constructor() {
    // this.ocultarVerificar=true;
     //this.Tiempo=5; 
    //this.nuevoJuego = new JuegoAgilidad();
    //console.info("Inicio agilidad");  
 // }
//================Modificado==============================
constructor(public miServicio : JuegoServiceService) {
  this.ocultarVerificar=true;
  this.Tiempo=5; 
  this.nuevoJuego = new JuegoAgilidad();
  
 this.nuevoJuego.jugador = this.miServicio.TraerUsuario();

 console.info("Inicio agilidad");  
}


  //================original=========================1
  /*NuevoJuego() {
    this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }*/
   //===============modificado=========================1
  NuevoJuego() {
    this.nuevoJuego = new JuegoAgilidad();
    
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    this.ocultarVerificar=false;
    this.nuevoJuego.generarNuevo();    
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
     
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar()
        this.ocultarVerificar=true;
        this.Tiempo=5;
        
      }
      }, 900);

  }

  //=================originail=============================
 // verificar()
 // {
  //  this.ocultarVerificar=false;
 //   clearInterval(this.repetidor);
   
  //}  
  //=================Modificado===============================
  verificar()
  {
    this.ocultarVerificar=false;
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      
      this.ocultarVerificar=true;
      clearInterval(this.repetidor);
      

    }else{
      this.MostarMensaje("Puede fallar!!!");
      clearInterval(this.repetidor);
      this.ocultarVerificar=true;
      this.enviarJuego.emit(this.nuevoJuego);
      
      this.Tiempo=5;
    }
    
      
  }  
  //==MOSTramos el mensaje
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

/*

import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  Mensajes:string;
  
  ngOnInit() {
  }
   constructor(public miServicio : JuegoServiceService) {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
     this.nuevoJuego = new JuegoAgilidad();
     
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();

    console.info("Inicio agilidad");  
  }

  NuevoJuego() {
    this.nuevoJuego = new JuegoAgilidad();
    
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    this.ocultarVerificar=false;
    this.nuevoJuego.generarNuevo();    
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
     
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar()
        this.ocultarVerificar=true;
        this.Tiempo=5;
        
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      
      this.ocultarVerificar=true;
      clearInterval(this.repetidor);
      

    }else{
      this.MostarMensaje("Puede fallar!!!");
      clearInterval(this.repetidor);
      this.ocultarVerificar=true;
      this.enviarJuego.emit(this.nuevoJuego);
      
      this.Tiempo=5;
    }
    
      
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

*/