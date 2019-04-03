import { NgModule } from '@angular/core';
import { TraineeComponent } from './trainee.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [TraineeComponent],
    bootstrap: [TraineeComponent],
    exports: [TraineeComponent],
})
export class TraineeModule { }
