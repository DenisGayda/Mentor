import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [AdminComponent],
    exports: [AdminComponent],
})
export class AdminModule { }
