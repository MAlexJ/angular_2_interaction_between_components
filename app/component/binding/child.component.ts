import {Component, Input} from '@angular/core'

@Component({
    selector: 'child-comp',
    templateUrl: 'template/html/binding/child.component.html'


})
export class ChildComponent {

    private _childText: string;

    @Input('childText')
    set childText(value: string) {
        this._childText = value;
    }

    get childText(): string {
        return this._childText;
    }

}
