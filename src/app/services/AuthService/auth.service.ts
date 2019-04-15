import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseSignInInterface } from '../../configs/Interfaces/response-sign-in-interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

    public signIn$(email: string, password: string): void {
        this.http.post<ResponseSignInInterface>(`${environment.URL}/user/auth`, {auth: {email, password}})
            .subscribe(role => this.router.navigate([`/${role.role}`]));
    }

}
