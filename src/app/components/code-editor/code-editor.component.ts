import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent implements OnInit {
    @Input() theme: string;
    @Input() language: string;
    public editorOptions;
    public code = ``;

    ngOnInit(): void {
        this.fillEditorOptions();
    }

    public clickSave(): void {
        localStorage.code = JSON.stringify(this.code);
    }

    private fillEditorOptions(): void {
        this.editorOptions = {
            theme: this.theme,
            language: this.language,
        };
    }

}
