import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}   from '../component/app.component';
import {InputComponent} from "../component/binding/input.component";
import {TextComponent} from "../component/binding/text.component";
import {ChildComponent} from "../component/binding/child.component";
import {BiChildComponent} from "../component/unilateral_binding/child.component";
import {CheckBoxComponent} from "../component/unilateral_binding/check_box.component";
import {NgClassComponent} from "../component/directive/ng_class_component";
import {DynamicChangeStyle} from "../component/directive/dynamic_change_style.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, DynamicChangeStyle, NgClassComponent, CheckBoxComponent, InputComponent, TextComponent, ChildComponent, BiChildComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}