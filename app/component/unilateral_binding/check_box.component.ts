import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'check-app',
    templateUrl: 'template/html/unilateral_binding/check_box.component.html'
})
export class CheckBoxComponent {

    // Value of radio button
    radioBtn: string;

    //********************** Input ******************

    @Input()
    checkBoxFirst: string;

    @Input()
    checkBoxSecond: string;

    @Input()
    value_radio: string;

    //********************* Output ***************************

    @Output()
    onChanged_state_radio = new EventEmitter<string>();

    eventChangeRadioButton(value: string) {
        this.radioBtn = value;
        this.onChanged_state_radio.emit(value);
    }

}