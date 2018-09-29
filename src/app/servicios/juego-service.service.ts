import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service'; 
import { Router } from '@angular/router';

@Injectable()
export class JuegoServiceService {
  miRoute: Router;
  resultados: any;
  myArrayServicio : Array<Juego>;
  lista:any;
  list:any;
  UsuarioLogueado:string;
  peticion:any;

  constructor( public miHttp: MiHttpService) {
    this.peticion = this.miHttp.httpGetO("http://localhost:4200");
    this.myArrayServicio = new Array<Juego>();
   
     //3003
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  //constructor(private miServicio : MiHttpService) { 
   // this.myArrayServicio = new Array<Juego>();
  // }


  TraerUsuario(){
    return this.UsuarioLogueado;
   }

   CargarUsuario(user:string){
    this.UsuarioLogueado = user;
   }
  

   public CargarLista(ArrayParaPasar:Array<Juego>){
    this.myArrayServicio.concat(ArrayParaPasar);
    console.info("En el Servicio: ",ArrayParaPasar);
  }

  public InicializarLista(){

    return this.myArrayServicio;
  }
  
  public TraerPalabas(){
       
    return this.miHttp.TraerPalabra().toPromise()
    .then(
    datos=> {
      console.log("Datos:" + datos);
      return datos;
    });
   }
  public listar(): Array<Juego> {
   this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
    .then( data => {
      console.log( data );
    })
    .catch( err => {
      console.log( err );
    });
//Cargar para el tateti


    
   
  
    this.peticion
    .subscribe( data => {
      console.log("En listar");
      console.log( data );
    }, err => {
      console.info("error: " ,err );
    })

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
    .subscribe( data => {
      console.log("En listarPromesa");
      console.log( data );
    }, err => {
      console.log( err );
    })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}
