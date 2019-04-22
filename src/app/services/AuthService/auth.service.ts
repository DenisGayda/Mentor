import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseSignInInterface } from '../../configs/Interfaces/response-sign-in-interface';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    public error$: Subject<string> = new Subject();

    constructor(private http: HttpClient, private router: Router) { }

    public signIn$(email: string, password: string): void {
        this.http.post<ResponseSignInInterface>(`${environment.URL}/user/auh`, {auth: {email, password}})
            .subscribe(role => {
                if (role.role) {
                    this.router.navigate([`/${role.role}`]);
                } else {
                    this.error$.next('ERROR');
                }
            });
    }

}
