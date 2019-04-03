import { NgModule } from '@angular/core';
import { MentorComponent } from './mentor.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [MentorComponent],
    exports: [MentorComponent],
})
export class MentorModule { }
