import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizItemComponent } from './quiz-item.component';
import { QuizItemModule } from './quiz-item.module';

describe('QuizItemComponent', () => {
    let component: QuizItemComponent;
    let fixture: ComponentFixture<QuizItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ QuizItemModule ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuizItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
