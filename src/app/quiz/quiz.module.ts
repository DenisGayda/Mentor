import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizItemModule } from './components/quiz-item/quiz-item.module';
import { TimerModule } from './components/timer/timer.module';
import { QuizComponent } from './quiz.component';

@NgModule({
    imports: [
        CommonModule,
        QuizItemModule,
        TimerModule,
    ],
    declarations: [
        QuizComponent,
    ],
    exports: [
        QuizComponent,
    ],
})
export class QuizModule {
}
