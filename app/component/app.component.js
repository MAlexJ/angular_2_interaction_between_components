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
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.clicks = 0;
        //*************************  CheckBoxComponent ******************************
        /**
         * Variable from CheckBoxComponent
         */
        this._checkBoxFirst = 'Angular JS';
        this._checkBoxSecond = 'Java EE';
    }
    addTextInTextComponent(text) {
        this.inputTextComponent = text;
    }
    addTextInFieldComponent(text) {
        this.inputFieldComponent = text;
    }
    addTextInChildComponent(text) {
        this.textChildComponent = text;
    }
    onChanged(increased) {
        increased == true ? this.clicks++ : this.clicks--;
    }
    _onChanged_state_radio(radio) {
        console.log('<' + radio + '>');
        this._value_radio = radio;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'root-app',
        templateUrl: 'template/html/app.component.html',
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
