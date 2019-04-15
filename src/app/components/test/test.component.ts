import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../services/TestService/test.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
    public addTestFormGroup: FormGroup;
    public testThemes: string[] = ['html', 'css', 'js', 'angular'];

    constructor(private testService: TestService) {}

    ngOnInit(): void {
        this.addTestFormGroup = new FormGroup({
            theme: new FormControl('', [Validators.required]),
            question: new FormControl('', [Validators.required]),
            correctAnswer: new FormControl('', [Validators.required]),
            answers: new FormArray([
                new FormControl(''),
                new FormControl(''),
                new FormControl(''),
            ]),
        });
    }

    public addAnswer(): void {
        (<FormArray>this.addTestFormGroup.controls.answers).push(new FormControl(''));
    }

    public removeAnswer(index: number): void {
        (<FormArray>this.addTestFormGroup.controls.answers).removeAt(index);
    }

    public confirmTest(): void {
        this.testService.confirmTest(this.addTestFormGroup.value);
    }

    public checkCorrect($event): void {
        this.addTestFormGroup.get('correctAnswer').patchValue($event.value);
    }

    public toFormControl(point: string): FormControl {
        return <FormControl>this.addTestFormGroup.get(point);
    }

    public toArray(): AbstractControl[] {
        return  (<FormArray>this.addTestFormGroup.get('answers')).controls;
    }

}
