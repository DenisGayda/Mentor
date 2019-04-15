import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import {HttpClientModule} from '@angular/common/http';

describe('TestService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ HttpClientModule ],
        providers: [ TestService ],
    }));
    it('should be created', () => {
        const service: TestService = TestBed.get(TestService);

        expect(service).toBeTruthy();
    });
});
