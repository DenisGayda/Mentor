import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/NotificationService/notification.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit{
    constructor(private notificationService: NotificationService){}

    ngOnInit(): void {
        this.notificationService._notifications$
            .subscribe(data => this.notificationService.showSpecificNotification(data.id, data.type, data.message))
    }
}
