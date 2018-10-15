import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  lista:any;
  


  //======================original======================
  //constructor(
   // private route: ActivatedRoute,
    //private router: Router) {
  //    this.progreso=0;
   //   this.ProgresoDeAncho="0%";

 // }
   //======================Modificado======================
   constructor(private miServicio : JuegoServiceService,
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.lista = this.miServicio.InicializarLista();
      console.log(this.lista);

  }
  ngOnInit() {
  }
//===============original================================
  //Entrar() {
   // if (this.usuario === 'admin' && this.clave === 'admin') {
  //    this.router.navigate(['/Principal']);
   // }
 // }
//==================Modificado==============================
  
  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin' || this.usuario === 'alan' && this.clave === '1234') {
      this.miServicio.CargarUsuario(this.usuario);
      this.router.navigate(['/Principal']);
    }
    else {
      this.router.navigate(['#']);
    }
  }
  
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";

      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}

/*

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  lista:any;
  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(private miServicio : JuegoServiceService,
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.lista = this.miServicio.InicializarLista();
      console.log(this.lista);

  }

  ngOnInit() {
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin' || this.usuario === 'German' && this.clave === '1234') {
      this.miServicio.CargarUsuario(this.usuario);
      this.router.navigate(['/Principal']);
    }
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}


*/