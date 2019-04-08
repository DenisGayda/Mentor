import {ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUserInterface } from '../../Interfaces/add-user-interface';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit {
    @Input() ROLE: string;
    @Output() onAdd = new EventEmitter();
    public user: AddUserInterface;
    public form: FormGroup;

    public addUser(): void {
        this.user = {
            name: this.form.value.firstName,
            surname: this.form.value.lastName,
            email: this.form.value.email,
            password: 'password',
            role: this.ROLE,
        };
        this.onAdd.emit(this.user);
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.email, Validators.required]),
        });
    }

}
