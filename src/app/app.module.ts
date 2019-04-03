import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MentorModule } from './components/methor/methor.module';
import { ManagerModule } from './components/manager/manager.module';
import { TraineeModule } from './components/trainee/trainee.module';
import { AdminModule } from './components/admin/admin.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MentorModule,
        ManagerModule,
        TraineeModule,
        AdminModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
