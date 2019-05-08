import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ToolBarModule } from './components/tool-bar/tool-bar.module';
import { NotifierModule } from 'angular-notifier';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatIconModule,
                MatButtonModule,
                ToolBarModule,
                NotifierModule,
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });
});
