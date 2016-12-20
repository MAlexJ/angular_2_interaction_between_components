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
let CheckBoxComponent = class CheckBoxComponent {
    constructor() {
        //********************* Output ***************************
        this.onChanged_state_radio = new core_1.EventEmitter();
    }
    eventChangeRadioButton(value) {
        this.radioBtn = value;
        this.onChanged_state_radio.emit(value);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckBoxComponent.prototype, "checkBoxFirst", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckBoxComponent.prototype, "checkBoxSecond", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckBoxComponent.prototype, "value_radio", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CheckBoxComponent.prototype, "onChanged_state_radio", void 0);
CheckBoxComponent = __decorate([
    core_1.Component({
        selector: 'check-app',
        templateUrl: 'template/html/unilateral_binding/check_box.component.html'
    }),
    __metadata("design:paramtypes", [])
], CheckBoxComponent);
exports.CheckBoxComponent = CheckBoxComponent;
