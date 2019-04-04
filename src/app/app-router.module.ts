import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', loadChildren: './pages/authorization/auth.module#AuthModule'},
    {path: 'admin', loadChildren: './pages/authorization/auth.module#AuthModule'},
    {path: 'manager', loadChildren: './pages/authorization/auth.module#AuthModule'},
    {path: 'mentor', loadChildren: './pages/authorization/auth.module#AuthModule'},
    {path: 'trainee', loadChildren: './pages/authorization/auth.module#AuthModule'},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRouterModule { }
