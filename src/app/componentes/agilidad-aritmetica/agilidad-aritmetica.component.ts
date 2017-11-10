// import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
// import { JuegoAgilidad } from '../../clases/juego-agilidad'

// import {Subscription} from "rxjs";
// import {TimerObservable} from "rxjs/observable/TimerObservable";
// @Component({
//   selector: 'app-agilidad-aritmetica',
//   templateUrl: './agilidad-aritmetica.component.html',
//   styleUrls: ['./agilidad-aritmetica.component.css']
// })
// export class AgilidadAritmeticaComponent implements OnInit {
//    @Output() 
//   enviarJuego :EventEmitter<any>= new EventEmitter<any>();
//   nuevoJuego : JuegoAgilidad;
//   ocultarVerificar: boolean;
//   Tiempo: number;
//   repetidor:any;
//   private subscription: Subscription;
//   ngOnInit() {
//   }
//    constructor() {
//      this.ocultarVerificar=true;
//      this.Tiempo=5; 
//     this.nuevoJuego = new JuegoAgilidad();
//     console.info("Inicio agilidad");  
//   }
//   NuevoJuego() {
//     this.ocultarVerificar=false;
//    this.repetidor = setInterval(()=>{ 
      
//       this.Tiempo--;
//       console.log("llego", this.Tiempo);
//       if(this.Tiempo==0 ) {
//         clearInterval(this.repetidor);
//         this.verificar();
//         this.ocultarVerificar=true;
//         this.Tiempo=5;
//       }
//       }, 900);

//   }
//   verificar()
//   {
//     this.ocultarVerificar=false;
//     clearInterval(this.repetidor);
   

   
//   }  

// }
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import {MatSpinner} from '@angular/material';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  aux : boolean;
  Mensajes:string;
  
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }
  // NuevoJuego() {
  //   this.ocultarVerificar=false;
  //   this.repetidor = setInterval(()=>{       
  //     this.Tiempo--;
  //     console.log("llego", this.Tiempo);
  //     if(this.Tiempo==0 ) {
  //       clearInterval(this.repetidor);
  //       this.verificar();
  //       this.ocultarVerificar=true;
  //       this.Tiempo=5;
  //     }
  //   }, 900);

  // }
    NuevoJuego() {
    this.ocultarVerificar=false;
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        this.verificar();
      }
      }, 900);
  } 
  // verificar()
  // {
  //   this.ocultarVerificar=false;
  //   clearInterval(this.repetidor);
  // }  
  verificar()
  {
    this.ocultarVerificar=false;
    this.nuevoJuego.verificar();
    if(this.nuevoJuego.gano){
      this.aux = true;
      this.MostarMensaje("Sos un Genio!!!",true);
    }      
    else{
      this.aux = false;
      this.MostarMensaje("Ooops, casi lo lograste!",false); 
    }
     
    this.enviarJuego.emit(this.nuevoJuego);
    //this.nuevoJuego = new JuegoAgilidad();
    this.limpiarIntervalo();
  }  

  limpiarIntervalo() {
    clearInterval(this.repetidor);
    this.ocultarVerificar=true;
    this.Tiempo=5;
    this.nuevoJuego = new JuegoAgilidad();//para borrar el anterior
  }


  MostarMensaje(mensaje:string,gano:boolean=false) {
    this.Mensajes = mensaje;    
    var x = document.getElementById("snackbar");
    if(gano)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }

    var modelo = this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   } 

}
