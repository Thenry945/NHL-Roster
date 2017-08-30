import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IPlayers } from './players';

@Injectable()
export class PlayerService {
   private _playersURL='app/players.json';
   constructor(private _http: Http){}
   
   getplayers(): Observable<IPlayers[]> {
      return this._http.get(this._playersURL)
      .map((response: Response) => <IPlayers[]> response.json());
   }

   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 
}