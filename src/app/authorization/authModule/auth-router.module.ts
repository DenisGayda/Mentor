import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationPageComponent} from '../authorization.component';

const routes: Routes = [
    {path: 'auth', component: AuthorizationPageComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})

export class AuthRouterModule {}
