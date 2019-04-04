import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ManagerPageModule } from './components/manager/manager-page-module';
import { TraineePageModule } from './components/trainee/trainee-page-module';
import { AdminPageModule } from './components/admin/admin-page-module';
import { MentorPageModule } from './components/mentor/mentor-page-module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MentorPageModule,
        ManagerPageModule,
        TraineePageModule,
        AdminPageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
