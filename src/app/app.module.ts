import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/AuthService/auth.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
