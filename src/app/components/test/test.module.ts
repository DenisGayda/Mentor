import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListModule } from '../list/list.module';
import { TestService } from '../../services/TestService/test.service';

@NgModule({
    declarations: [
        TestComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        ListModule,
        MatRadioModule,
    ],
    exports: [ TestComponent ],
    providers: [ TestService ],
})
export class TestModule {
}
