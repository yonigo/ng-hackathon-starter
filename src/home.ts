/// <reference src="typings/tsd.d.ts">

import {NgFor, Component, View, bootstrap} from "angular2/angular2";
import {FORM_DIRECTIVES} from 'angular2/forms';
import {ParseServise} from './parse';
import {GoogleSearchServise} from './google-map-search';

@Component({
    selector: "home"
})
@View({
    directives: [NgFor, FORM_DIRECTIVES],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template: `
        <style>
          google-map {
            height: 300px;
            width: 300px;
          }
        </style>
        <div>Enter Your address</div>
        <input placeholder="Enter your address" [(ng-model)]="address">

        <div *ng-for="#location of locations">{{location.attributes.home}}
        <br>

        </div>

       <google-map latitude="37.77493" longitude="-122.41942" fit-to-markers>
  <google-map-marker latitude="37.779" longitude="-122.3892"
      draggable="true" title="Go Giants!"></google-map-marker>
  <google-map-marker latitude="37.777" longitude="-122.38911"></google-map-marker>
</google-map>

    `


})
export default class Home {

    constructor(parse:ParseServise, googleSearch: GoogleSearchServise) {
        parse.getAddresses().then(locations =>this.locations = locations)

    }

    name:string = "ng-hackathon";
    address:string = "";
    locations:any[] = [];
}