import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationPageComponent } from './authorization-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule , MatButtonModule, MatFormFieldModule } from '@angular/material';
import { AuthService } from '../../services/AuthService/auth.service';
import { CloudStoreService } from '../../services/CloudStoreService/cloud-store.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthPageRouterModule } from './auth-page-router.module';
import { InputClearModule } from '../../components/input-clear/input-clear.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        AngularFireAuthModule,
        AuthPageRouterModule,
        InputClearModule,
    ],
    declarations: [ AuthorizationPageComponent ],
    providers: [
        AuthService,
        CloudStoreService,
    ],
})
export class AuthPageModule { }
