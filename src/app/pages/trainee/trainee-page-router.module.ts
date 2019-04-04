import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraineePageComponent } from './trainee-page.component';

const routes: Routes = [
    { path: '', component: TraineePageComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})

export class TraineePageRouterModule {}
