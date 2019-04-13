import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ResponseSignInInterface } from '../../configs/Interfaces/response-sign-in-interface';
import { first, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    public _role$ = new ReplaySubject<string>();

    constructor(private http: HttpClient) { }

    public signIn$(email: string, password: string): Observable<ResponseSignInInterface> {
        const auth = {
            email,
            password,
        };

        return this.http.post<ResponseSignInInterface>(`${environment.URL}/user/auth`, {auth})
            .pipe(tap(role => this._role$.next(role.role)));
    }

    public role$(path: string): Observable<boolean> {
        return this._role$.asObservable().pipe(
            switchMap(role => of<boolean>(role === path)),
            first()
        );
    }
}
