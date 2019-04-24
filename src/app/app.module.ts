import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MatSnackBarModule } from '@angular/material';
import { NotificationService } from './services/NotificationService/notification.service';
import { NotifierModule } from 'angular-notifier';

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
        MonacoEditorModule.forRoot(),
        HttpClientModule,
        MatSnackBarModule,
        NotifierModule.withConfig({
            position: {
                horizontal: {
                    position: 'right',
                }
            }
        }),
    ],
    bootstrap: [ AppComponent ],
    providers: [ NotificationService ],
})
export class AppModule {
}
