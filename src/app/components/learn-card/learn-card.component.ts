import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
    selector: 'app-learn-card',
    templateUrl: './learn-card.component.html',
    styleUrls: ['./learn-card.component.sass'],
})
export class LearnCardComponent implements AfterViewInit {
    @Input() readonly: boolean;
    @Input() initText: string;
    public optionsMentor = {
        lineWrapping: true,
        autofocus: true,
    };
    public optionsTrainee = {
        lineWrapping: true,
        autofocus: true,
        status: false,
        toolbar: false,
    };
    @ViewChild('editorComponent')
    private editor: TdTextEditorComponent;

    ngAfterViewInit(): void {
        if (this.readonly) {
            this.editor.togglePreview();
        }
    }

    saveData(): void {
        localStorage.data = JSON.stringify(this.editor.value);
    }

}
