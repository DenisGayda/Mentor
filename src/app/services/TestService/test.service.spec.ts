import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from '../NotificationService/notification.service';

describe('TestService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ HttpClientModule ],
        providers: [
            TestService,
            NotificationService,
        ],
    }));
    it('should be created', () => {
        const service: TestService = TestBed.get(TestService);

        expect(service).toBeTruthy();
    });
});
