import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraineePageComponent } from './trainee-page.component';

const routes: Routes = [
    { path: '', component: TraineePageComponent },
    { path: 'quiz/:theme', loadChildren: '../../components/quiz/quiz.module#QuizModule' }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})

export class TraineePageRouterModule {}
