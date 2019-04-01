import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {AuthInterface} from '../Interfaces/AuthInterface';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
    public authFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    constructor(private fb: FormBuilder,
                private authService: AuthService) { }

    ngOnInit() {
        this.authFormGroup = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
        this.authFormGroup.valueChanges
            .subscribe(data => this.dataFromForm = data)
    }

    signIn(email, password){
        this.authService.signIn(email, password)
    }

}
