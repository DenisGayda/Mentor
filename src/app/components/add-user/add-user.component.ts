import {ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit {
    @Input() role: string;
    @Output() onAdd = new EventEmitter();
    public form: FormGroup;

    public addUser(): void {
        // const user = {
        //     name: this.form.value.firstName,
        //     surname: this.form.value.lastName,
        //     email: this.form.value.email,
        //     password: 'password',
        //     role: this.role,
        // };
        // const { firstName, lastName, email, } = obj;
        const user = this.form.value;
        user.password = 'password';
        user.role = this.role;
        console.log(user);
        // this.onAdd.emit(user);
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.email, Validators.required]),
        });
    }
}
