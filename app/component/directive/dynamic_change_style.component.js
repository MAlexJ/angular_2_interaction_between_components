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
let DynamicChangeStyle = class DynamicChangeStyle {
    constructor() {
        //field
        this.visibility = true;
    }
    //method
    toggle() {
        this.visibility = !this.visibility;
    }
};
DynamicChangeStyle = __decorate([
    core_1.Component({
        selector: 'dynamic_change_style',
        template: `<div [ngClass]="{invisible_class: visibility}">
                    <h1>Hello Angular 2</h1>
                    <p>
                        Angular 2 представляет модульную архитектуру приложения
                    </p>
                </div>
                <button (click)="toggle()">Toggle</button>`,
        styles: [`.invisible_class{display:none;}`]
    }),
    __metadata("design:paramtypes", [])
], DynamicChangeStyle);
exports.DynamicChangeStyle = DynamicChangeStyle;
