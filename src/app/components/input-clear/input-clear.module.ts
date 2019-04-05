import { InputClearComponent } from './input-clear.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    declarations: [InputClearComponent],
    exports: [
        InputClearComponent,
    ],
})
export class InputClearModule { }
