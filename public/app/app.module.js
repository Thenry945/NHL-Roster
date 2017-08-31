"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var players_component_1 = require("./players.component");
var teams_component_1 = require("./teams.component");
var notfound_component_1 = require("./notfound.component");
var router_1 = require("@angular/router");
var teamplayers_component_1 = require("./teamplayers.component");
var appRoutes = [
    { path: '', redirectTo: 'Teams', pathMatch: 'full' },
    { path: 'Players', component: players_component_1.AppPlayer },
    { path: 'Teams', component: teams_component_1.AppTeam,
        children: [
            { path: 'Players', component: players_component_1.AppPlayer },
        ]
    },
    { path: '**', component: notfound_component_1.AppPageNotFound }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, players_component_1.AppPlayer, teams_component_1.AppTeam, notfound_component_1.AppPageNotFound, teamplayers_component_1.AppTeamPlayer],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map