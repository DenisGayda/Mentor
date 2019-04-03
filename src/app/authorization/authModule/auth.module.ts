import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationPageComponent } from '../authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule , MatButtonModule, MatFormFieldModule } from '@angular/material';
import { AuthService } from '../../services/AuthService/auth.service';
import { CloudStoreService } from '../../services/CloudStoreService/cloud-store.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        AngularFireAuthModule,
        AuthRouterModule,
    ],
    declarations: [ AuthorizationPageComponent ],
    providers: [
        AuthService,
        CloudStoreService,
    ],
})
export class AuthModule { }
