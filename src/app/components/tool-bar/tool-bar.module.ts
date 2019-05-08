import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { NotificationService } from '../../services/NotificationService/notification.service';

@NgModule({
    declarations: [
        ToolBarComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
    ],
    exports: [ ToolBarComponent ],
    providers: [ NotificationService ],
})
export class ToolBarModule {}
