import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule ,MatButtonModule, MatFormFieldModule} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AuthService} from './auth.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
