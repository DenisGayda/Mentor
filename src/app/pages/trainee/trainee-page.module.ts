import { NgModule } from '@angular/core';
import { TraineePageComponent } from './trainee-page.component';
import { TraineePageRouterModule } from './trainee-page-router.module';

@NgModule({
    imports: [ TraineePageRouterModule ],
    declarations: [ TraineePageComponent ],
})
export class TraineePageModule { }
