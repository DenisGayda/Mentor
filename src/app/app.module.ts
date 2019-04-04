import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatDividerModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
