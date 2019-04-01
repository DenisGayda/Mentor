import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
    public authFormGroup: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.authFormGroup = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

}
