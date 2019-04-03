import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { QuizTaskInterface } from '../Interfaces/quiz-task.interface';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
    @Input() tasks: QuizTaskInterface[];
    @Input() time: number; // minutes
}
