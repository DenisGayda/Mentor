import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
    ],
    declarations: [AddUserComponent],
    exports: [
        AddUserComponent,
    ],
})
export class AddUserModule { }
