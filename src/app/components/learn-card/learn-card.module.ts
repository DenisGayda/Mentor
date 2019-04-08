import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnCardComponent } from './learn-card.component';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        CovalentTextEditorModule,
        MatButtonModule,
    ],
    declarations: [
        LearnCardComponent,
    ],
    exports: [
        LearnCardComponent,
    ],
})
export class LearnCardModule { }
