import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { ArrayNotificationsInterface } from '../../configs/Interfaces/array-notifications-interface';
import { map, share } from 'rxjs/operators';

@Injectable()
export class NotificationService {

    public get _notifications$(): Observable<ArrayNotificationsInterface[]> {
        return this.notification$.asObservable().pipe(share());
    }
    private notification$ = new BehaviorSubject<ArrayNotificationsInterface[]>([]);

    constructor(private notifier: NotifierService) { }

    public showSpecificNotification(template): void {
        if (this.getLastNotification()) {
            this.notifier.show({...this.getLastNotification().notification, template});
        }
    }

    public notificationPush(notificationObject: ArrayNotificationsInterface): void {
        this.notification$.next([...this.notification$.getValue(), notificationObject]);
    }

    public changeNotificationStatus(id: string): void {
        this.notification$.getValue()
            .find(notification => notification.notification.id === id).status = true;
        this.notifier.hide(id);
    }

    public filterNotificationsByStatus$(condition): Observable<ArrayNotificationsInterface[]> {
        return this._notifications$.pipe(
            map(notificationArr => notificationArr
                .filter(notification => notification.status === condition),
            ),
        );
    }

    public ChangeNotificationStatusForAll(): void {
        this.notification$.getValue().forEach(notification => notification.status = true);
    }

    public getId(): number {
        return  this.notification$.getValue().length;
    }

    private getLastNotification(): ArrayNotificationsInterface {
        const value = this.notification$.getValue();

        return value[value.length - 1];
    }
}
