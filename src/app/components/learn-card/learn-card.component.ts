import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-learn-card',
    templateUrl: './learn-card.component.html',
    styleUrls: ['./learn-card.component.css'],
})
export class LearnCardComponent implements OnInit {
    public options = {
        lineWrapping: true,
        autofocus: true,
        autosave: {
            enabled: true,
            uniqueId: "MyUniqueID",
            delay: 1000,
        },
    };
    public data;
    constructor() { }

    ngOnInit() {
  }
  saveData(): void{
        localStorage.data = JSON.stringify(this.data)
  }

}
