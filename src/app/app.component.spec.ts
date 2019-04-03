import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { MentorComponent } from './components/methor/mentor.component';
import { TraineeComponent } from './components/trainee/trainee.component';
import { ManagerComponent } from './components/manager/manager.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AdminComponent,
                ManagerComponent,
                MentorComponent,
                TraineeComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });
});
