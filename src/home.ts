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
    template:`
        <form class="container">
    <style>
        google-map {
    height: 300px;
    width: 300px;
}
</style>
    <google-map latitude="37.77493" longitude="-122.41942" fit-to-markers>
<google-map-marker latitude="37.779" longitude="-122.3892"
draggable="true" title="Go Giants!"></google-map-marker>
    <google-map-marker latitude="37.777" longitude="-122.38911"></google-map-marker>
    </google-map>
            <div>Enter Your address</div>
            <div class="input-group">
                <input placeholder="Enter your address" [(ng-model)]="address" class="form-control">
               <span class="input-group-btn">
                    <button (click)="addAddress()" class="btn btn-success">Add</button>
                </span>
            </div>
            <br>
            <ul class="list-group">
                <li class="list-group-item" *ng-for="#location of locations">{{location.attributes.home}}</li>
            </ul>
        </form>
    `


})
export default class Home {

    constructor(private parse: ParseServise, googleSearch: GoogleSearchServise) {
        parse.getAddresses().then(locations =>this.locations =locations)
    }

    name:string = "ng-hackathon";
    address:string = "";
    locations:any[] = [];


    addAddress() {
        var _this = this;
        this.parse.setAddress(_this.address).then(function(newAddress) {
            _this.locations.push(newAddress);
            _this.address = "";
        });
    }

}