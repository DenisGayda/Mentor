import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuizTaskInterface } from '../../../Interfaces/quiz-task.interface';

@Component({
    selector: 'app-quiz-item',
    templateUrl: './quiz-item.component.html',
    styleUrls: ['./quiz-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizItemComponent {
    @Input() task: QuizTaskInterface;
}
