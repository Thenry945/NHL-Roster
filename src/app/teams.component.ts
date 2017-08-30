import {Component} from '@angular/core';
import {ITeams} from './teams';
import {TeamsService} from './teams.service';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/teams.component.html',
    providers: [TeamsService]
})
export class AppTeam {
    title: "Teams";
    
    iteams: ITeams[];
    constructor(private _teams: TeamsService,private _router: Router){}

    ngOnInit() : void {
        this._teams.getTeams().subscribe(iteams => this.iteams = iteams);
    } 

    onBack() : void {
        this._router.navigate(['/Players']);
    }
}
