import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  //public listadoParaCompartir: Array<any>;
  public listadoParaCompartir: any;
  lista:any;

  //constructor() { this.listadoParaCompartir = new Array<any>()}
  constructor(public servicioJuego:JuegoServiceService) { 
    
  }

  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
  }

   tomarJuegoTerminado(juego: Juego)
  {
    //orginal-->
    this.listadoParaCompartir.push(juego);
    this.servicioJuego.CargarLista(this.listadoParaCompartir);
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);

   // console.info("en app",this.listadoParaCompartir);
  }
}
/*
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: any;
  lista:any;
  
  constructor(public servicioJuego:JuegoServiceService) { 
    
  }


  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
  }

   tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    this.servicioJuego.CargarLista(this.listadoParaCompartir);
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
   // console.info("en app",this.listadoParaCompartir);
  }
}
*/