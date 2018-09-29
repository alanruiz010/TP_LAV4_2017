import { log } from 'util';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class MiHttpService {
  public api: string = "http://gametimeback.herokuapp.com/";
  constructor( public http: Http ) { }

  public httpGetP ( url: string)// aca recibe una url
  //api="http://localhost:8080/jugadoresarchivo/apirestjugadores/";  debo poer esto en el parametro
  {
    return this.http
    .get( url ) //url podria pasarle mas paramettros
    .toPromise()
    .then( this.extractData ) //extraccion de datos
    .catch( this.handleError );
  }

 
  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }
 /* public httpPosttateti(url: string, objeto: any) {
    return this.http.post(url, objeto, httpOptions);
  }*/

  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }
///// estos son los agregados
  public TraerPalabra(): Observable<Response>{
    return this.http
    .get("../../../assets/palabras.json")
    .map(this.extraerDatos)
    .catch(this.handleError);
  }
///// estos son los agregados
  public httpGetJuagdorPromise(url: string, objeto:any){
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }
  ///// estos son los agregados
  public httpGetJuagdorPromiseO(url: string): Observable<Response>{
    
    return this.http.get( url )
    .map( ( res: Response ) => res.json())
    .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
   }
///// estos son los agregados
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
//===========================================================
  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
