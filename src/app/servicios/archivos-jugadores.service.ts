import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class ArchivosJugadoresService {
//archivo jugadores seria mi servicio 1
  api="http://localhost:8080/jugadoresarchivo/apirestjugadores/"; // esto deberia estar en el generico
  //se le tiene quepasar la ruta
  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    
  }


  public   traerJugadores(ruta) {
    return this.miHttp.httpGetO(this.api+ruta)
    .toPromise()
    .then( data => {
      console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
 

  
  }



}
