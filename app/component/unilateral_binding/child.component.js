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
let BiChildComponent = class BiChildComponent {
    constructor() {
        // field
        this.onChange = new core_1.EventEmitter();
    }
    // method
    change(state) {
        this.onChange.emit(state);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BiChildComponent.prototype, "onChange", void 0);
BiChildComponent = __decorate([
    core_1.Component({
        selector: 'child-event-app',
        template: `<button (click)="change(true)">Add</button>
               <button (click)="change(false)">Remove</button>`
    }),
    __metadata("design:paramtypes", [])
], BiChildComponent);
exports.BiChildComponent = BiChildComponent;
