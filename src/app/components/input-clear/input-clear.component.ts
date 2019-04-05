import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input-clear',
    templateUrl: './input-clear.component.html',
    styleUrls: ['./input-clear.component.css'],
})
export class InputClearComponent {
    @Input() holder: string;
    @Input() control = new FormControl();
    @Input() tp: string;
}
