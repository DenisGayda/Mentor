import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizTaskComponent } from './quiz-task.component';
import { QuizTaskModule } from './quiz-task.module';

describe('QuizTaskComponent', () => {
    let component: QuizTaskComponent;
    let fixture: ComponentFixture<QuizTaskComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ QuizTaskModule ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuizTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
