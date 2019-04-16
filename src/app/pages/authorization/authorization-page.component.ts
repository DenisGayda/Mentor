import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth.service';
import { AuthInterface } from '../../configs/Interfaces/auth-interface';
import { Subject, Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../Decorators/AutoUnsubscribe';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization-page.component.html',
    styleUrls: ['./authorization-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AutoUnsubscribe(['signInFormSubscribe()'])
export class AuthorizationPageComponent implements OnInit {
    public authFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    public error$: Subject<string> = new Subject();

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        ) {
    }

    ngOnInit(): void {
        const minLength = 6;
        const maxLength = 16;

        this.signInFormInit(minLength, maxLength);
        this.signInFormSubscribe();
    }

    public signIn(email: string, password: string): void {
        this.authService.signIn$(email, password);
    }

    public signInFormSubscribe(): Subscription {
        return  this.authFormGroup.valueChanges
            .subscribe(data => this.dataFromForm = data);
    }

    private signInFormInit(minLength: number, maxLength: number): void {
        this.authFormGroup = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,
                Validators.minLength(minLength),
                Validators.maxLength(maxLength)]],
        });
    }
}
