import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: 'template/html/app.component.html',
})
export class AppComponent {
    /**
     * variable from InputComponent
     */
    inputTextComponent: string;
    /**
     * Variable from TextComponent
     */
    inputFieldComponent: string;

    /**
     * Variable from ChildComponent
     */
    textChildComponent: string;

    addTextInTextComponent(text: string): void {
        this.inputTextComponent = text;
    }

    addTextInFieldComponent(text: string): void {
        this.inputFieldComponent = text;
    }

    addTextInChildComponent(text: string): void {
        this.textChildComponent = text;
    }

    clicks: number = 0;

    onChanged(increased) {
        increased == true ? this.clicks++ : this.clicks--;
    }

    //*************************  CheckBoxComponent ******************************
    /**
     * Variable from CheckBoxComponent
     */
    _checkBoxFirst: string = 'Angular JS';
    _checkBoxSecond: string = 'Java EE';
    _value_radio: string;

    _onChanged_state_radio(radio: string): void {
        console.log('<' + radio + '>');
        this._value_radio = radio;
    }
}