import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseSignInInterface } from '../../configs/Interfaces/response-sign-in-interface';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    public signIn$(email: string, password: string): Observable<ResponseSignInInterface> {
        const auth = {
            email,
            password,
        };

        return this.http.post<ResponseSignInInterface>(`${environment.URL}/user/auth`, {auth});
    }
}
