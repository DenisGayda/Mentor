import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.sass'],
})
export class CalendarComponent implements OnInit {
    public viewDate: Date = new Date();
    public events = [
        {
            start: new Date(),
            title: 'Пройти тесты по Promise',
            testTheme: 'js',
            color: {
                primary: 'blue',
            },
        },
    ];

    constructor(private router: Router, private ngZone: NgZone) { }

    ngOnInit(): void {}

    public dayCLick(event): void {
        this.ngZone.run(() => this.router.navigate([`trainee/quiz/${event.day.events[0].testTheme}`]))
    }
}
