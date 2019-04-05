import {ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUserInterface} from '../../Interfaces/add-user-interface';

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
    // form: FormGroup = new FormGroup({
    //     firstName: new FormControl('', Validators.required),
    // });

    addUser(): void {
        // this.ROLE = this.user.role;
        this.user.password = 'password';
        // this.user.name = this.form.value.firstName;
        console.log(this.user);
        // this.onAdd.emit(this.user);
    }

    ngOnInit() {

    }

}
