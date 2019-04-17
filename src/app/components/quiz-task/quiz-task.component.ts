import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { QuizTaskInterface } from '../../configs/Interfaces/quiz-task.interface';

@Component({
    selector: 'app-quiz-task',
    templateUrl: './quiz-task.component.html',
    styleUrls: ['./quiz-task.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizTaskComponent {
    @Output() answer = new EventEmitter<string>();
    @Input() task: QuizTaskInterface;
    @Input() answerValue: string;

    public emitAnswer(value): void {
        this.answer.emit(value);
    }
}
