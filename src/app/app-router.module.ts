import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full'},
    { path: 'auth', loadChildren: './pages/authorization/auth-page.module#AuthPageModule' },
    { path: 'admin', loadChildren: './pages/admin/admin-page.module#AdminPageModule' },
    { path: 'manager', loadChildren: './pages/manager/manager-page.module#ManagerPageModule' },
    { path: 'mentor', loadChildren: './pages/mentor/mentor-page.module#MentorPageModule', canActivate: [ AuthGuard ] },
    { path: 'trainee', loadChildren: './pages/trainee/trainee-page.module#TraineePageModule' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthGuard ],
})
export class AppRouterModule { }
