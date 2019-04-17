import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-trainee',
    templateUrl: './trainee-page.component.html',
    styleUrls: ['../../components/add-user/trainee-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraineePageComponent {
    public editorConfig = {
        language: 'javascript',
        theme: 'vs-dark',
    };
}
