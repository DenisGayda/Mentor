import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {anything, instance, mock, when} from 'ts-mockito';

import { AuthorizationPageComponent } from './authorization.component';
import {AuthModule} from './authModule/auth.module';
import {AuthService} from '../services/AuthService/auth.service';
import {CloudStoreService} from '../services/CloudStoreService/cloud-store.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

describe('AuthorizationComponent', () => {
    let component: AuthorizationPageComponent;
    let fixture: ComponentFixture<AuthorizationPageComponent>;

    beforeEach(async(() => {
        const authService = mock(AuthService);
        const router = mock(Router);
        const angularFireAuth = mock(AngularFireAuth);
        const angularFirestore = mock(AngularFirestore);

        when(authService.signIn(anything(), anything())).thenResolve(null);
        when(authService.signUp(anything(), anything())).thenResolve(null);

        TestBed.configureTestingModule({
            imports: [AuthModule],
            providers: [
                {provide: AuthService, useFactory: () => instance(authService)},
                {provide: CloudStoreService, useFactory: () => instance(CloudStoreService)},
                {provide: Router, useFactory: () => instance(router)},
                {provide: AngularFireAuth, useFactory: () => instance(angularFireAuth)},
                {provide: AngularFirestore, useFactory: () => instance(angularFirestore)},
            ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
