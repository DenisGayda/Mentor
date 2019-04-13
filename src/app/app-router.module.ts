import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full'},
    { path: 'auth', loadChildren: './pages/authorization/auth-page.module#AuthPageModule' },
    { path: 'admin', loadChildren: './pages/admin/admin-page.module#AdminPageModule', canActivate: [ AuthGuard ] },
    { path: 'manager', loadChildren: './pages/manager/manager-page.module#ManagerPageModule', canLoad: [ AuthGuard ]  },
    { path: 'mentor', loadChildren: './pages/mentor/mentor-page.module#MentorPageModule', canLoad: [ AuthGuard ] },
    { path: 'trainee', loadChildren: './pages/trainee/trainee-page.module#TraineePageModule', canLoad: [ AuthGuard ]  },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthGuard ],
})
export class AppRouterModule { }
