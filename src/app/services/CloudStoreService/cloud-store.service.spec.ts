import { TestBed } from '@angular/core/testing';
import { CloudStoreService } from './cloud-store.service';

describe('CloudStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [ CloudStoreService ],
    }));

    it('should be created', () => {
        const service: CloudStoreService = TestBed.get(CloudStoreService);

        expect(service).toBeTruthy();
    });
});
