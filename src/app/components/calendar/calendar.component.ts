import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
    public viewDate: Date = new Date();
    public events = [
        {
            start: new Date(),
            title: 'Пройти срез знаний',
            testTheme: 'js',
            color: {
                primary: 'red'
            }
        },
        {
            start: new Date(),
            title: 'Пройти тесты по Promise',
            testTheme: 'js',
            color: {
                primary: 'blue'
            }
        }
        ];
  constructor(private router: Router) { }

  ngOnInit() {}

  public dayCLick(event){
      this.router.navigate([`/quiz/${event.day.events.testTheme}`])
  }
}
