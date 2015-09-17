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
        <form class="container">
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

    constructor(private parse: ParseServise) {
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