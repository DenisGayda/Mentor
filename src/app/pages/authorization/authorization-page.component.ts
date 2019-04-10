import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth.service';
import { AuthInterface } from '../../configs/Interfaces/auth-interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserRole } from '../../configs/enums/user-role';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization-page.component.html',
    styleUrls: ['./authorization-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent implements OnInit {
    public authFormGroup: FormGroup;
    public dataFromForm: AuthInterface;
    public error$: Subject<string> = new Subject();

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
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
        this.authService.signIn$(email, password).subscribe(res => {
            if (res.role) {
                this.checkUserRole(res.role);
            } else {
                this.error$.next('Error');
            }
        });
    }

    private checkUserRole(role: string): void {
        switch (role) {
            case UserRole.MENTOR:
                this.router.navigate(['/mentor']);
                break;
            case UserRole.ADMIN:
                this.router.navigate(['/admin']);
                break;
            case UserRole.MANAGER:
                this.router.navigate(['/manager']);
                break;
            case UserRole.TRAINEE:
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
