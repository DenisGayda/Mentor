import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AdminComponent} from './components/admin/admin.component';
import {MethorComponent} from './components/methor/methor.component';
import {TraineeComponent} from './components/trainee/trainee.component';
import { ManagerComponent } from './components/manager/manager.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AdminComponent,
                ManagerComponent,
                MethorComponent,
                TraineeComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });
    it(`should have as title 'mentor'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app.title).toEqual('mentor');
    });
    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h1').textContent).toContain('Welcome to mentor!');
    });
});
