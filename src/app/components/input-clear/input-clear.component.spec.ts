import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputClearComponent } from './input-clear.component';
import { InputClearModule } from './input-clear.module';

describe('InputClearComponent', () => {
    let component: InputClearComponent;
    let fixture: ComponentFixture<InputClearComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ InputClearModule ],
        })
    .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(InputClearComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
