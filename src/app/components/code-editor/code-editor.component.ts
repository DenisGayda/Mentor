import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.sass']
})
export class CodeEditorComponent implements OnInit {
    @Input() theme;
    @Input() language;
    public editorOptions = {
        theme: this.theme,
        language: this.language,
    };
    public code: string = ``;
  constructor() { }

  ngOnInit(): void {
  }

}
