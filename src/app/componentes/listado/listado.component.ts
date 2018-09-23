import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService

   
  constructor(public servicioJuego:JuegoServiceService) {
    this.miServicioJuego = servicioJuego;
   // constructor(public servicioJuego:JuegoServiceService)  
      this.listadoParaCompartir = this.servicioJuego.InicializarLista();
      //this.lista = JSON.stringify(this.listadoParaCompartir);
   


  }
  
  ngOnInit() {
    
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoParaCompartir: Array<Juego>;
  lista:any;
  
  constructor(public servicioJuego:JuegoServiceService) { 
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    //this.lista = JSON.stringify(this.listadoParaCompartir);
    }
  
  ngOnInit() {
    
    
  }

  
  
}

*/