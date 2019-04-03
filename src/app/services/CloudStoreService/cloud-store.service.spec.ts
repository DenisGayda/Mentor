import { TestBed } from '@angular/core/testing';
import { CloudStoreService } from './cloud-store.service';
import { instance, mock } from 'ts-mockito';
import { AngularFirestore } from '@angular/fire/firestore';

describe('CloudStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {provide: AngularFirestore, useFactory: () => instance(mock(AngularFirestore))},
        ],
    }));

    it('should be created', () => {
        const service: CloudStoreService = TestBed.get(CloudStoreService);

        expect(service).toBeTruthy();
    });
});
