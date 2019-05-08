import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationService } from '../NotificationService/notification.service';
import { instance, mock } from 'ts-mockito';

describe('AuthService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            RouterTestingModule,
        ],
        providers: [
            AuthService,
            { provide: NotificationService, useFactory: () => instance(mock(NotificationService))},
        ],
    }));
    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);

        expect(service).toBeTruthy();
    });
});
