import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AuthInterface} from '../Interfaces/AuthInterface';
import {AuthService} from '../auth.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {passwordsValidator} from '../Validators/AuthorizationValidators';

export class Matcher implements ErrorStateMatcher{
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return form.control.controls['passwords'].hasError('passwordValidator');
    }
}

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
    public mode: string = 'SignIn';
    public authFormGroup: FormGroup;
    public signUpFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    public error: string;
    public signUpError: string;
    public matcher = new Matcher();

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
            this.authFormGroup = this.fb.group({
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(16)]],
            });
            this.authFormGroup.valueChanges
                .subscribe(data => this.dataFromForm = data);

            this.signUpFormGroup = this.fb.group({
                email: ['',[
                    Validators.required,
                    Validators.email
                ]],
                passwords: new FormGroup({
                    password: new FormControl('', [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(16)
                    ]),
                    repeatPassword: new FormControl('', [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(16)
                    ])
                }, [passwordsValidator])
            });
            this.signUpFormGroup.valueChanges
                .subscribe(data => {
                data.password = data.passwords.password;
                delete data.passwords;
                this.dataFromForm = data;
            })
        }

    signIn(email: string, password: string){
        this.authService.signIn(email, password)
            .then(data => console.log(data)) // Here write what need do if user logged in
            .catch(error => {
                if (error.code === "auth/user-not-found"){
                    this.error = 'User with that email not found';
                    console.log(this.error)
                }else if (error.code === "auth/wrong-password"){
                    this.error = 'Wrong password'
                }
                console.log(error)
            })
    }
    signUpClick(email: string, password: string){
        if (this.signUpFormGroup.valid){
            this.authService.signUp(email, password)
                .then(data => {
                    console.log(data); // Here write what need do if user sign up
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use'){
                        this.signUpError = 'Email already used';
                    }
                })
        }
    }
    changeMode(mode){
        this.mode = mode;
    }
}
