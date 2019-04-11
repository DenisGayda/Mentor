import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
    declarations: [ CodeEditorComponent ],
    imports: [
        CommonModule,
        MonacoEditorModule,
    ],
    exports: [ CodeEditorComponent ],
})
export class TestModule {
}
