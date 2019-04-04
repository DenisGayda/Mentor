import { Component, EventEmitter, Input, Output } from '@angular/core';

export class User {
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
}

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
    @Input() ROLE: string;
    @Output() onAdd = new EventEmitter();
    user: User = new User();
    CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    PASSWORD_LENGTH = 8;
    PASSWORD = '';
    addUser(): void {
        this.passwordCreation();
        this.ROLE = this.user.role;
        console.log(this.user);
        this.onAdd.emit(this.user);
    }

    passwordCreation(): void {
        for (let i = 0; i < this.PASSWORD_LENGTH; i++) {
            this.PASSWORD += this.CHARSET.charAt(Math.floor(Math.random() * this.CHARSET.length));
        }
        this.user.password = this.PASSWORD;
        this.PASSWORD = '';
    }
}
