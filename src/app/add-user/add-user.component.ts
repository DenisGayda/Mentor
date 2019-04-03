import { Component } from '@angular/core';

export class User {
    name: string;
    email: string;
}

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
    name: string;
    email: string;
    user: User = new User();

    addUser(): void {

    }
}
