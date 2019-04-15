import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { instance, mock } from 'ts-mockito';
import { CloudStoreService } from '../CloudStoreService/cloud-store.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ HttpClientModule, RouterTestingModule ],
        providers: [
            { provide: CloudStoreService, useFactory: () => instance(mock(CloudStoreService)) },
            AuthService,
        ],
    }));
    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);

        expect(service).toBeTruthy();
    });
});
