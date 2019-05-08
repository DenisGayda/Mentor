import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolBarComponent } from './tool-bar.component';
import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
} from '@angular/material';
import { NotificationService } from '../../services/NotificationService/notification.service';
import { instance, mock } from 'ts-mockito';

describe('ToolBarComponent', () => {
    let fixture: ComponentFixture<ToolBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatToolbarModule,
                MatIconModule,
                MatMenuModule,
                MatButtonModule,
            ],
            declarations: [ ToolBarComponent ],
            providers: [
            {provide: NotificationService, useFactory: () => instance(mock(NotificationService))},
            ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolBarComponent);
        fixture.detectChanges();
    });
});
