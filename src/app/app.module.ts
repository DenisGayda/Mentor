import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NotificationService } from './services/NotificationService/notification.service';
import { NotifierModule } from 'angular-notifier';
import { ToolBarModule } from './components/tool-bar/tool-bar.module';

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
        MonacoEditorModule.forRoot (),
        HttpClientModule,
        ToolBarModule,
        NotifierModule.withConfig ({
            position: {
                horizontal: {
                    position: 'right',
                },
            },
        }),
        MatIconModule,
        MatButtonModule,
    ],
    bootstrap: [ AppComponent ],
    providers: [ NotificationService ],
})
export class AppModule {
}
