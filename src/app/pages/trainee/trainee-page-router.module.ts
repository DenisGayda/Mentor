import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraineePageComponent } from './trainee-page.component';
import { AuthService } from '../../services/AuthService/auth.service';

const routes: Routes = [
    { path: '', component: TraineePageComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
    providers: [ AuthService ],
})

export class TraineePageRouterModule {}
