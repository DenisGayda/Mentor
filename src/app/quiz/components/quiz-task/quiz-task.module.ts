import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizTaskComponent } from './quiz-task.component';
import { MatRadioModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatRadioModule,
    ],
    declarations: [QuizTaskComponent],
    exports: [QuizTaskComponent],
})
export class QuizTaskModule { }
