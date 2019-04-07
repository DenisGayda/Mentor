import { Component, OnInit } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    public addTestFormGroup: FormGroup;

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
        localStorage.test = JSON.stringify(this.addTestFormGroup.value);
    }

    public checkCorrect($event): void {
        this.addTestFormGroup.get('correctAnswer').patchValue($event.value);
    }

    public toFormControl(point: string): FormControl {
        return <FormControl>this.addTestFormGroup.get(point);
    }
}
