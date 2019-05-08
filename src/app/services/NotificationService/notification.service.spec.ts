import { TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { NotificationService } from './notification.service';
import { NotifierModule } from 'angular-notifier';
import { ArrayNotificationsInterface } from '../../configs/Interfaces/array-notifications-interface';

describe ('NotificationService', () => {
    beforeEach (() => TestBed.configureTestingModule ({
        imports: [ NotifierModule ],
        providers: [ NotificationService ],
    }));

    it ('should be created', () => {
        const service: NotificationService = TestBed.get (NotificationService);

        expect (service).toBeTruthy ();
    });

    it ('should add new notification', () => {
        const service: NotificationService = TestBed.get (NotificationService);
        const pushObj: ArrayNotificationsInterface = {
            notification: {
                type: faker.lorem.word,
                message: faker.lorem.word,
                id: faker.lorem.word,
            },
            status: false,
        };

        service.notificationPush (pushObj);

        service._notifications$.subscribe (notificationArr => {
            const lastElem = notificationArr.length - 1;

            expect (notificationArr[lastElem]).toBe (pushObj);
        });
    });

    it ('should return notification with same status', () => {
        const service: NotificationService = TestBed.get (NotificationService);
        const pushArr: ArrayNotificationsInterface[] = [];
        const objectsCount = 5;

        for (let i = 0; i < objectsCount; i++) {
            const pushObj = {
                notification: {
                    type: faker.lorem.word,
                    message: faker.lorem.word,
                    id: faker.random.uuid(),
                },
                status: faker.random.boolean,
            };

            pushArr.concat(pushObj);
        }

        pushArr.forEach((notification: ArrayNotificationsInterface) => service.notificationPush(notification));

        service.filterNotificationsByStatus$(true)
            .subscribe(notificationArr => {
                expect(notificationArr
                // tslint:disable-next-line:no-boolean-literal-compare
                    .find(notification => notification.status === false))
                    .toBeUndefined();
            });
    });

    it ('should change status for all notifications to true', () => {
        const service: NotificationService = TestBed.get (NotificationService);
        const pushArr: ArrayNotificationsInterface[] = [];
        const objectsCount = 5;

        for (let i = 0; i < objectsCount; i++) {
            const pushObj = {
                notification: {
                    type: faker.lorem.word,
                    message: faker.lorem.word,
                    id: faker.random.uuid(),
                },
                status: faker.random.boolean,
            };

            pushArr.concat(pushObj);
        }
        pushArr.forEach(notification => service.notificationPush(notification));
        service.ChangeNotificationStatusForAll();

        service._notifications$.subscribe(notificationsArr => {
            expect(notificationsArr
            // tslint:disable-next-line:no-boolean-literal-compare
                    .find(notification => notification.status === false))
                .toBeUndefined();
        });
    });
});
