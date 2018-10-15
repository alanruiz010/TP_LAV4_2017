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

  constructor( private miHttp: MiHttpService , private route: Router) {
    this.miRoute = route;
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
/*
public cargar(objeto) {
  return this.miHttp.httpPosttateti(this.miHttp.api + 'api/resultado/', objeto).subscribe(
    success => {
      this.peticion = success;
    }, error => {
      console.log(error);
    });
}*/


    
   
  
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
/*

import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { MiHttpService } from './mi-http/mi-http.service';
import { Router } from '@angular/router';

@Injectable()
export class JuegoServiceService {
  miRoute: Router;
  peticion: any;
  resultados: any;

  constructor(public miHttp: MiHttpService, private route: Router) {
    this.miRoute = route;
  }

  public listar(): Array<Juego> {
    this.miHttp.httpGetP(this.miHttp.api)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    this.peticion
      .subscribe(data => {
        console.log("En listar");
        console.log(data);
      }, err => {
        console.info("error: ", err);
      });
    let miArray: Array<Juego> = new Array<Juego>();
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
      .subscribe(data => {
        console.log("En listarPromesa");
        console.log(data);
      }, err => {
        console.log(err);
      })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      resolve(miArray);
    });

    return promesa;
  }

  public cargar(objeto) {
    return this.miHttp.httpPostP(this.miHttp.api + 'api/resultado/', objeto).subscribe(
      success => {
        this.peticion = success;
      }, error => {
        console.log(error);
      });
  }

  public traerTodos(filtro) {
    return this.miHttp.httpGetO(this.miHttp.api + 'api/resultado/')
      .toPromise()
      .then(data => {
        this.resultados = data;
        this.resultados = this.resultados.filter(data => data.juego === filtro || filtro == "");
        return this.resultados;
      }, err => {
        console.log(err);
      });
  }
}
*/