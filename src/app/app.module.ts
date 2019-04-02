import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {CloudStoreService} from './services/CloudStoreService/cloud-store.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AppRouterModule} from './app-router/app-router.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AppRouterModule,
        CommonModule,
        RouterModule,
    ],
    providers: [CloudStoreService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
