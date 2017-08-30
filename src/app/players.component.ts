import { Component } from '@angular/core';
import { IPlayers } from './players';
import { PlayerService } from './players.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'app/players.component.html',
    providers: [PlayerService]
})
export class AppPlayer {
    title: 'Blues';
    status: true;

    iplayers: IPlayers[];
    constructor(private _player: PlayerService){}

    ngOnInit() : void {
        this._player.getplayers().subscribe(iplayers => this.iplayers = iplayers);
    }

}