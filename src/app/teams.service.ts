import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ITeams } from './teams';

@Injectable()
export class TeamsService {
    private _teamsURL = 'app/teams.json';
    constructor(private _http: Http){}

    getTeams(): Observable<ITeams[]> {
        return this._http.get(this._teamsURL)
        .map((response: Response) => <ITeams[]> response.json());
    }

    private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   }
}