import { Component } from '@angular/core';

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
    user: User = new User();

    addUser(): void {
        console.log(this.user);
    }
}
