import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { QuizTaskInterface } from '../Interfaces/quiz-task.interface';
import { QuizAnswersInterface } from '../Interfaces/quiz-answers.interface';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
    @Input() tasks: QuizTaskInterface[] = [];
    @Input() time: number; // minutes

    public currentTaskIndex = 0;
    private answers: QuizAnswersInterface = {};

    public addAnswer(value: string): void {
        const taskId = this.tasks[this.currentTaskIndex].id;

        this.answers[taskId] = value;
    }

    public prev(): void {
        if (this.currentTaskIndex > 0) {
            this.currentTaskIndex--;
        }
    }

    public next(): void {
        if (this.currentTaskIndex < this.tasks.length - 1) {
            this.currentTaskIndex++;
        }
    }

    public get currentAnswer(): string {
        if (!this.tasks.length) {
            return;
        }
        const taskId = this.tasks[this.currentTaskIndex].id;

        return this.answers[taskId];
    }

    public get tasksPagination(): string {
        return `${this.currentTaskIndex + 1}/${this.tasks.length}`;
    }

    public get isAllAnswered(): boolean {
        return Object.keys(this.answers).length === this.tasks.length;
    }

    public get isTaskFirst(): boolean {
        return this.currentTaskIndex === 0;
    }

    public get isTaskLast(): boolean {
        return this.currentTaskIndex === this.tasks.length - 1;
    }

    public completeQuiz(): void {
        alert('Quiz is completed');
        localStorage.setItem('quiz', JSON.stringify(this.answers));
    }
}
