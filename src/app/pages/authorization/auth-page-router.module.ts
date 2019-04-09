import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './authorization-page.component';

const routes: Routes = [
    { path: '', component: AuthorizationPageComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})

export class AuthPageRouterModule {}
