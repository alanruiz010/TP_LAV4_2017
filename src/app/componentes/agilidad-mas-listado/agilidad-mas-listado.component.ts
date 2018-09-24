import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
//llamamos a servicio
import { JuegoServiceService } from '../../servicios/juego-service.service';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
 // public listadoParaCompartir: Array<any>;
  public listadoParaCompartir: any;
  lista:any;
//============original==========
  //constructor() { this.listadoParaCompartir = new Array<any>()}
//============modificado========
constructor(public servicioJuego:JuegoServiceService) {
}

//============original==========
  //ngOnInit() {
 // }
  //============modificado========
  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
   // console.info("en app",this.listadoParaCompartir);

    this.servicioJuego.CargarLista(this.listadoParaCompartir);
    console.log(this.listadoParaCompartir);console.log(this.lista);
  }
}


/*
import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
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

    console.log(this.listadoParaCompartir);console.log(this.lista);
  }
}


*/