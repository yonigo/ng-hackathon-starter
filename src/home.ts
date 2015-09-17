/// <reference src="typings/tsd.d.ts">

import {NgFor, Component, View, bootstrap} from "angular2/angular2";
import {FORM_DIRECTIVES} from 'angular2/forms'
import {ParseServise} from './parse'

@Component({
    selector: "home"
})
@View({
    directives: [NgFor, FORM_DIRECTIVES],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
        <div>Enter Your address</div>
        <input placeholder="Enter your address" [(ng-model)]="address">
        <div *ng-for="#location of locations">{{location}}</div>
    `
})
export default class Home {

    constructor(parse: ParseServise) {
        parse.getAddresses().then(locations =>this.locations =locations)
    }
    name:string = "ng-hackathon";
    address:string = "";
    locations:any[] = [];

}