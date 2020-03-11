import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizTaskModule } from '../quiz-task/quiz-task.module';
import { TimerModule } from '../timer/timer.module';
import { QuizComponent } from './quiz.component';
import { MatButtonModule } from '@angular/material';
import { QuizRouterModule } from './quiz-router.module';

@NgModule({
    imports: [
        CommonModule,
        QuizTaskModule,
        TimerModule,
        MatButtonModule,
        QuizRouterModule,
    ],
    declarations: [ QuizComponent ],
    exports: [ QuizComponent ],
})
export class QuizModule { }
