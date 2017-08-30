import { Component } from '@angular/core';
import { IPlayers } from './players';
import { PlayerService } from './players.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'
})
export class AppComponent  { }