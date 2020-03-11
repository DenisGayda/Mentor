import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { RouterTestingModule } from '@angular/router/testing';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

describe('CalendarComponent', () => {
    let component: CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory,
                }),
                RouterTestingModule ],
            declarations: [ CalendarComponent ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
