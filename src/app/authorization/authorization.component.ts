import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthInterface} from '../Interfaces/AuthInterface';
import {AuthService} from '../auth.service';
import {Matcher, passwordsValidator} from '../Validators/AuthorizationValidators';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent implements OnInit {
    public mode = 'SignIn';
    public authFormGroup: FormGroup;
    public signUpFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    public error: string;
    public signUpError: string;
    public matcher = new Matcher();

    constructor(private fb: FormBuilder, private authService: AuthService) {
    }

    ngOnInit(): void {
        const minLength = 6;
        const maxLength = 16;

        this.signInFormInit(minLength, maxLength);
        this.signInFormSubscribe();
        this.signUpFormInit(minLength, maxLength);
        this.signUpFormSubscribe();
    }

    public signIn(email: string, password: string): void {
        this.authService.signIn(email, password)
            .then(data => localStorage.user = data) // Here write what need do if user logged in
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    this.error = 'User with that email not found';
                } else if (error.code === 'auth/wrong-password') {
                    this.error = 'Wrong password';
                }
            });
    }

    public signUpClick(email: string, password: string): void {
        if (this.signUpFormGroup.valid) {
            this.authService.signUp(email, password)
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        this.signUpError = 'Email already used';
                    }
                });
        }
    }

    public changeMode(mode): void {
        this.mode = mode;
    }

    private signInFormInit(minLength: number, maxLength: number): void {
        this.authFormGroup = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,
                Validators.minLength(minLength),
                Validators.maxLength(maxLength)]],
        });
    }

    private signInFormSubscribe(): void {
        this.authFormGroup.valueChanges
            .subscribe(data => this.dataFromForm = data);
    }

    private signUpFormInit(minLength: number, maxLength: number): void {
        this.signUpFormGroup = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.email,
            ]],
            passwords: new FormGroup({
                password: new FormControl('', [
                    Validators.required,
                    Validators.minLength(minLength),
                    Validators.maxLength(maxLength),
                ]),
                repeatPassword: new FormControl('', [
                    Validators.required,
                    Validators.minLength(minLength),
                    Validators.maxLength(maxLength),
                ]),
            }, [passwordsValidator]),
        });
    }

    private signUpFormSubscribe(): void {
        this.signUpFormGroup.valueChanges
            .subscribe(data => {
                data.password = data.passwords.password;
                delete data.passwords;
                this.dataFromForm = data;
            });
    }
}
