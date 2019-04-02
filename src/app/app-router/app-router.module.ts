import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
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
