import {Component} from '@angular/core';

@Component({
    selector: 'dynamic_change_style',
    template: `<div [ngClass]="{invisible_class: visibility}">
                    <h1>Hello Angular 2</h1>
                    <p>
                        Angular 2 представляет модульную архитектуру приложения
                    </p>
                </div>
                <button (click)="toggle()">Toggle</button>`,
    styles: [`.invisible_class{display:none;}`]
})
export class DynamicChangeStyle {

    //field
    visibility: boolean = true;

    //method
    toggle() {
        this.visibility = !this.visibility;
    }

}