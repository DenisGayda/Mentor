import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MethorComponent } from './methor.component';
describe('MethorComponent', () => {
    let component: MethorComponent;
    let fixture: ComponentFixture<MethorComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MethorComponent ],
        })
    .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MethorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
