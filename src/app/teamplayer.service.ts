import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ITeamPlayers } from './teamplayer';

@Injectable()
export class TeamPlayerService {
   private _playersURL='http://api.sportradar.us/nhl-ot4/teams/441660ea-0f24-11e2-8525-18a905767e44/profile.json?api_key=ymasq5b9jub2nhbqwxz265qa';
   constructor(private _http: Http){}


   getplayers(): Observable<ITeamPlayers[]> {
    var reqHeaders = new Headers();
    reqHeaders.append('Content-Type', 'application/json');
    reqHeaders.append('X-Originating-Ip', '64.85.220.91');
    this._http.head(reqHeaders.toString());

       
      return this._http.get(this._playersURL,)
      .map((response: Response) => <ITeamPlayers[]> response.json())
      .do(data => console.log(data));
   }

   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 
}