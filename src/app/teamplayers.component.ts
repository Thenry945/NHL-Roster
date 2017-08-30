import { Component } from '@angular/core';
import { ITeamPlayers } from './teamplayer';
import { TeamPlayerService } from './teamplayer.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'team-players',
    templateUrl: 'app/players.component.html',
    providers: [TeamPlayerService]
})
export class AppTeamPlayer {
    title: 'Blues';
    status: true;

    iplayers: ITeamPlayers[];
    constructor(private _player: TeamPlayerService){}

    ngOnInit() : void {
        this._player.getplayers().subscribe(iplayers => this.iplayers = iplayers);
    }

}