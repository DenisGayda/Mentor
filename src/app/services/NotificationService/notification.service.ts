import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { NotificationInterface } from '../../configs/Interfaces/NotificationInterface';

@Injectable()
export class NotificationService {
    private notifications$ = new Subject<NotificationInterface>();

    constructor(private notifier: NotifierService) { }

    public showSpecificNotification(id: string, type: string, message: string): void {
        this.notifier.show( { id, message, type });
    }

    public notificationPush(notificationObject: NotificationInterface): void {
        this.notifications$.next(notificationObject)
    }

    public get _notifications$(): Observable<NotificationInterface>{
        return this.notifications$.asObservable()
    }

}
