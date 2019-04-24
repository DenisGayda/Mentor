import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseSignInInterface } from '../../configs/Interfaces/response-sign-in-interface';
import { Router } from '@angular/router';
import { NotificationService } from '../NotificationService/notification.service';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) { }

    public signIn$(email: string, password: string): void {
        this.http.post<ResponseSignInInterface>(`${environment.URL}/user/auth`, {auth: {email, password}})
            .subscribe(role => {
                if (role.role) {
                    this.router.navigate([`/${role.role}`]);
                } else {
                    this.notificationService.notificationPush({id: '1', type: 'error', message: 'Maybe you email or password wrong?'})
                }
            });
    }

}
