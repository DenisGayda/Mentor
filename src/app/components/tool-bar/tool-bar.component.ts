import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrayNotificationsInterface } from '../../configs/Interfaces/array-notifications-interface';
import { NotificationService } from '../../services/NotificationService/notification.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
    constructor(private notificationService: NotificationService) { }

    public getFilteredNotifications$(condition): Observable<ArrayNotificationsInterface[]> {
        return this.notificationService.filterNotificationsByStatus$(condition);
    }

    public closeMenu(): void {
        this.notificationService.ChangeNotificationStatusForAll();
    }
}
