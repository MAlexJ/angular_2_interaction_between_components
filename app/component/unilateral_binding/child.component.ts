import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'child-event-app',
    template: `<button (click)="change(true)">Add</button>
               <button (click)="change(false)">Remove</button>`
})
export class BiChildComponent {

    // field
    @Output()
    onChange = new EventEmitter<boolean>();

    // method
    change(state: boolean): void {
        this.onChange.emit(state);
    }

}