import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ManagerComponent],
    exports: [ManagerComponent],
})
export class ManagerModule { }
