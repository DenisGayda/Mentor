import { InputClearComponent } from './input-clear.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
    declarations: [InputClearComponent],
    exports: [
        InputClearComponent,
    ],
})
export class InputClearModule {}
