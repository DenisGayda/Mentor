import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthInterface} from '../Interfaces/AuthInterface';
import {AuthService} from '../services/AuthService/auth.service';
import { Subject} from 'rxjs';
import {CloudStoreService} from '../services/CloudStoreService/cloud-store.service';
import {UserFirestoreInterface} from '../Interfaces/UserFirestoreIterface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent implements OnInit {
    public mode = 'SignIn';
    public authFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    public error$: Subject<string> = new Subject();

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private cloudStoreService: CloudStoreService,
                private router: Router,
                ) {
    }

    ngOnInit(): void {
        const minLength = 6;
        const maxLength = 16;

        this.signInFormInit(minLength, maxLength);
        this.signInFormSubscribe();
    }

    public signIn(email: string, password: string): void {
        this.authService.signIn(email, password)
            .then(data => {
                localStorage.user = JSON.stringify(data.user);

                return  this.cloudStoreService
                    .getUserAdditionalInfo$(JSON.parse(localStorage.getItem('user')).uid)
                    .subscribe((value: UserFirestoreInterface) => this.checkUserRole(value.role));
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    this.error$.next('User error');
                } else if (error.code === 'auth/wrong-password') {
                    this.error$.next('Wrong password');
                }
            });
    }

    public changeMode(mode): void {
        this.mode = mode;
    }

    private checkUserRole(role: string): void {
        switch (role) {
            case 'mentor':
                this.router.navigate(['/mentor']);
                break;
            case 'admin':
                this.router.navigate(['/admin']);
                break;
            case 'manager':
                this.router.navigate(['/manager']);
                break;
            case 'trainee':
                this.router.navigate(['/trainee']);
                break;
            default:
                this.router.navigate(['/']);
        }
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
}
