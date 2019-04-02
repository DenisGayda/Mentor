import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationPageComponent} from '../authorization/authorization.component';

const routes: Routes = [
    {path: '', component: AuthorizationPageComponent},
    {path: 'auth', loadChildren: '../authorization/authModule/auth.module#AuthModule'},
    {path: 'admin', loadChildren: '../authorization/authModule/auth.module#AuthModule'},
    {path: 'manager', loadChildren: '../authorization/authModule/auth.module#AuthModule'},
    {path: 'mentor', loadChildren: '../authorization/authModule/auth.module#AuthModule'},
    {path: 'trainee', loadChildren: '../authorization/authModule/auth.module#AuthModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouterModule { }
