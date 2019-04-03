import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddUserModule } from './add-user/add-user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AddUserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
