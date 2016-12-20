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
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("../component/app.component");
const input_component_1 = require("../component/binding/input.component");
const text_component_1 = require("../component/binding/text.component");
const child_component_1 = require("../component/binding/child.component");
const child_component_2 = require("../component/unilateral_binding/child.component");
const check_box_component_1 = require("../component/unilateral_binding/check_box.component");
const ng_class_component_1 = require("../component/directive/ng_class_component");
const dynamic_change_style_component_1 = require("../component/directive/dynamic_change_style.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, dynamic_change_style_component_1.DynamicChangeStyle, ng_class_component_1.NgClassComponent, check_box_component_1.CheckBoxComponent, input_component_1.InputComponent, text_component_1.TextComponent, child_component_1.ChildComponent, child_component_2.BiChildComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
