import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizItemComponent } from './quiz-item.component';
import { MatRadioModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatRadioModule,
    ],
    declarations: [QuizItemComponent],
    exports: [QuizItemComponent],
})
export class QuizItemModule {
}
