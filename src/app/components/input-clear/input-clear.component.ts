import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input-clear',
    templateUrl: './input-clear.component.html',
    styleUrls: ['./input-clear.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputClearComponent {
    @Input() customPlaceholder: string;
    @Input() customFormControl: FormControl;
    @Input() customType: string;
}
