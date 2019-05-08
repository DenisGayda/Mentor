import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NotificationService } from './services/NotificationService/notification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('customNotification') notificationTemplate;

    constructor(private notificationService: NotificationService) {}

    ngAfterViewInit(): void {
        this.notificationService._notifications$
            .subscribe(() => this.notificationService.showSpecificNotification(this.notificationTemplate));
    }

}
