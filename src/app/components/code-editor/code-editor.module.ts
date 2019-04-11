import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [ CodeEditorComponent ],
    imports: [
        CommonModule,
        MonacoEditorModule,
        FormsModule,
        MatButtonModule,
    ],
    exports: [ CodeEditorComponent ],
})
export class CodeEditorModule {
}
