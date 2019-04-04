import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin/admin-page-component';
import { MentorPageComponent } from './components/mentor/mentor-page-component';
import { TraineePageComponent } from './components/trainee/trainee-page-component';
import { ManagerPageComponent } from './components/manager/manager-page-component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AdminPageComponent,
                ManagerPageComponent,
                MentorPageComponent,
                TraineePageComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });
});
