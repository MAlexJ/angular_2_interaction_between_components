import {Component, Input} from '@angular/core';

@Component({
    selector: 'text-app',
    templateUrl: 'template/html/binding/text.component.html',
    styleUrls: ['template/css/binding/text.component.css']
})
export class TextComponent {

    @Input()
    textField: string;

}