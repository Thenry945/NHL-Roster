import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { AppPlayer } from './players.component';
import { AppTeam } from './teams.component'; 
import { AppPageNotFound } from './notfound.component';
import { RouterModule, Routes} from '@angular/router';
import { AppTeamPlayer } from './teamplayers.component';



const appRoutes = [
  { path: '', redirectTo: 'Teams', pathMatch: 'full' },
  { path: 'Players', component: AppPlayer },
  { path: 'Teams',   component:AppTeam, 
    children: [
      {path: 'Players', component: AppPlayer},
    ]
  },
  { path: '**', component:AppPageNotFound}
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ AppComponent, AppPlayer,AppTeam,AppPageNotFound,AppTeamPlayer ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
