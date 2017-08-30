"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var TeamPlayerService = (function () {
    function TeamPlayerService(_http) {
        this._http = _http;
        this._playersURL = 'http://api.sportradar.us/nhl-ot4/teams/441660ea-0f24-11e2-8525-18a905767e44/profile.json?api_key=ymasq5b9jub2nhbqwxz265qa';
    }
    TeamPlayerService.prototype.getplayers = function () {
        var reqHeaders = new http_1.Headers();
        reqHeaders.append('Content-Type', 'application/json');
        reqHeaders.append('X-Originating-Ip', '64.85.220.91');
        this._http.head(reqHeaders.toString());
        return this._http.get(this._playersURL)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); });
    };
    TeamPlayerService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error());
    };
    return TeamPlayerService;
}());
TeamPlayerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TeamPlayerService);
exports.TeamPlayerService = TeamPlayerService;
//# sourceMappingURL=teamplayer.service.js.map