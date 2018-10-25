import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-trivia-paices-mas-listado',
  templateUrl: './trivia-paices-mas-listado.component.html',
  styleUrls: ['./trivia-paices-mas-listado.component.css']
})
export class TriviaPaicesMasListadoComponent implements OnInit {

  public listadoParaCompartir: any;
  lista:any;

  constructor(public servicioJuego:JuegoServiceService) { }

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
