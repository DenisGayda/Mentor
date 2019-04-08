import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LearnCardComponent } from './learn-card.component';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { MatButtonModule } from '@angular/material';

describe('LearnCardComponent', () => {
    let component: LearnCardComponent;
    let fixture: ComponentFixture<LearnCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ CovalentTextEditorModule, MatButtonModule ],
            declarations: [ LearnCardComponent ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LearnCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
