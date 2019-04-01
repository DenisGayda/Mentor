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
export class AuthorizationComponent implements OnInit {
    public mode = 'SignIn';
    public authFormGroup: FormGroup;
    public signUpFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    public error: string;
    public signUpError: string;
    public matcher = new Matcher();

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {
        const minLength = 6;
        const maxLength = 16;

        this.authFormGroup = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,
                Validators.minLength(minLength),
                Validators.maxLength(maxLength)]],
        });
        this.authFormGroup.valueChanges
                .subscribe(data => this.dataFromForm = data);

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
        this.signUpFormGroup.valueChanges
                .subscribe(data => {
                    data.password = data.passwords.password;
                    delete data.passwords;
                    this.dataFromForm = data;
                });
    }

    signIn(email: string, password: string): void {
        this.authService.signIn(email, password)
            .then(data => localStorage.user = data) // Here write what need do if user logged in
            . catch (error => {
                if (error.code === 'auth/user-not-found') {
                    this.error = 'User with that email not found';
                } else if (error.code === 'auth/wrong-password') {
                    this.error = 'Wrong password';
                }
            });
    }

    signUpClick(email: string, password: string): void {
        if (this.signUpFormGroup.valid) {
            this.authService.signUp(email, password)
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        this.signUpError = 'Email already used';
                    }
                });
        }
    }

    changeMode(mode): void {
        this.mode = mode;
    }
}
