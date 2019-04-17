import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerComponent } from './timer.component';
import { TimerModule } from './timer.module';

describe('TimerComponent', () => {
    let component: TimerComponent;
    let fixture: ComponentFixture<TimerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ TimerModule ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
