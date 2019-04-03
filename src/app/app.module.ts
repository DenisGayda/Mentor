import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ManagerModule } from './components/manager/manager.module';
import { TraineeModule } from './components/trainee/trainee.module';
import { AdminModule } from './components/admin/admin.module';
import { MentorComponent } from './components/mentor/mentor.component';
@NgModule({
    declarations: [
        AppComponent,
        MentorComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MentorComponent,
        ManagerModule,
        TraineeModule,
        AdminModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
