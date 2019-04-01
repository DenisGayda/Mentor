import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TraineeComponent } from './components/trainee/trainee.component';
import { MethorComponent } from './components/methor/methor.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        TraineeComponent,
        MethorComponent,
        ManagerComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
