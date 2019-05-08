import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { anything, instance, mock, when } from 'ts-mockito';
import { AuthorizationPageComponent } from './authorization-page.component';
import { AuthPageModule } from './auth-page.module';
import { AuthService } from '../../services/AuthService/auth.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthorizationComponent', () => {
    let component: AuthorizationPageComponent;
    let fixture: ComponentFixture<AuthorizationPageComponent>;

    beforeEach(async(() => {
        const authService = mock(AuthService);

        when(authService.signIn$(anything(), anything())).thenResolve(null);

        TestBed.configureTestingModule({
            imports: [
                AuthPageModule,
                BrowserAnimationsModule,
            ],
            providers: [
                {provide: AuthService, useFactory: () => instance(authService)},
                {provide: Router, useFactory: () => instance(mock(Router))},
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
