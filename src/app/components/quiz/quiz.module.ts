import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizTaskModule } from '../quiz-task/quiz-task.module';
import { TimerModule } from '../timer/timer.module';
import { QuizComponent } from './quiz.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        QuizTaskModule,
        TimerModule,
        MatButtonModule,
    ],
    declarations: [
        QuizComponent,
    ],
    exports: [
        QuizComponent,
    ],
})
export class QuizModule { }
