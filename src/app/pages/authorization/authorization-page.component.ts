import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth.service';
import { AuthInterface } from '../../configs/Interfaces/auth-interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization-page.component.html',
    styleUrls: ['./authorization-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent implements OnInit, OnDestroy {
    public authFormGroup: FormGroup;
    private dataFromForm: AuthInterface;

    constructor(
        private fb: FormBuilder,
        public authService: AuthService,
        ) {
    }

    ngOnInit(): void {
        const minLength = 6;
        const maxLength = 16;

        this.signInFormInit(minLength, maxLength);
        this.signInFormSubscribe();
    }

    ngOnDestroy(): void {
        this.signInFormSubscribe().unsubscribe();
    }

    public signIn(email: string, password: string): void {
        this.authService.signIn$(email, password);
    }

    private signInFormInit(minLength: number, maxLength: number): void {
        this.authFormGroup = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,
                Validators.minLength(minLength),
                Validators.maxLength(maxLength)]],
        });
    }

    private signInFormSubscribe(): Subscription {
        return this.authFormGroup.valueChanges
            .subscribe(data => this.dataFromForm = data);
    }
}
