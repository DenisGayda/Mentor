import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { ResponseSignInInterface } from '../../configs/Interfaces/response-sign-in-interface';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class AuthService {
    private _role$ = new Subject<string>();

    constructor(private http: HttpClient) { }

    public signIn$(email: string, password: string): Observable<ResponseSignInInterface> {
        const auth = {
            email,
            password,
        };

        return this.http.post<ResponseSignInInterface>(`${environment.URL}/user/auth`, {auth})
            .pipe(tap(role => this._role$.next(role.role)));
    }

     public get role$(): Observable<string> {
        return this._role$.asObservable();
    }
}
