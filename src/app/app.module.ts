import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
