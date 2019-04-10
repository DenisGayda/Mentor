import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { instance, mock } from 'ts-mockito';
import { CloudStoreService } from '../CloudStoreService/cloud-store.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ HttpClientModule ],
        providers: [
            { provide: AngularFireAuth, useFactory: () => instance(mock(AngularFireAuth)) },
            { provide: CloudStoreService, useFactory: () => instance(mock(CloudStoreService)) },
            AuthService,
        ],
    }));
    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);

        expect(service).toBeTruthy();
    });
});
