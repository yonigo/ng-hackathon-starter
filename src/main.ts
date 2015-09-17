/// <reference src="typings/tsd.d.ts">

import {CORE_DIRECTIVES, Component, View, bootstrap} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet} from "angular2/router";
import {bind, Injectable} from "angular2/di";
import {ParseServise} from './parse';
import {GoogleSearchServise} from './google-map-search';


import Home from "./home";
import RepoList from "./repo-list";

@RouteConfig([
    {path: '/', as: "home", component:Home}
])
@Component({
    selector: "app"
})
@View({
    directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],
    template: `
        <br><br>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {}

bootstrap(App, [
    HTTP_BINDINGS,
    ROUTER_BINDINGS,
    ParseServise,
    GoogleSearchServise,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);
