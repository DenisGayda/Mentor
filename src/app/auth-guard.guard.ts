import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './services/AuthService/auth.service';
import { first, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService) {}

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.role$.pipe(
            switchMap(role => of<boolean>(role === route.path)),
            first()
        );
        }
    }

