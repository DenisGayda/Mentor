import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/AuthService/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService) {}

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return true;
        }
    }

