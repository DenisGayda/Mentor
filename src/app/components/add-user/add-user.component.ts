import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit {
    @Input() role: string;
    @Output() onAdd = new EventEmitter();
    public form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.email, Validators.required]),
        });
    }

    public addUser(): void {
        const user = {
            ...this.form.value,
            password: 'password',
            role: this.role,
        };

        this.onAdd.emit(user);
    }
}
