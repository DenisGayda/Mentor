import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { TraineePageComponent } from './trainee-page.component';

const routes: Routes = [
    {
        path: '',
        component: TraineePageComponent,
        children: [
            {
                path: '',
                component: CalendarComponent,
                pathMatch: 'full',
            },
            {
                path: 'quiz/:theme',
                loadChildren: '../../components/quiz/quiz.module#QuizModule'
            }
            ]
    },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})

export class TraineePageRouterModule {}
