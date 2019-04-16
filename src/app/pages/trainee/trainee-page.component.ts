import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TestService } from '../../services/TestService/test-service.service';

@Component({
    selector: 'app-trainee',
    templateUrl: './trainee-page.component.html',
    styleUrls: ['./trainee-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraineePageComponent{
    public editorConfig = {
        language: 'javascript',
        theme: 'vs-dark',
    };
    constructor(public testService: TestService){}

}
