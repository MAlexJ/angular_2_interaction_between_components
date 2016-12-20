import {Component, Input} from '@angular/core';

@Component({
    selector: 'input-app',
    templateUrl: 'template/html/binding/input.component.html'
})
export class InputComponent {

    @Input()
    inputText: string;

}
