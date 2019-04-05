import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

const MS_IN_SEC = 1000;
const SECS_IN_MIN = 60;
const MINS_IN_HOUR = 60;
const SECS_IN_HOUR = MINS_IN_HOUR * SECS_IN_MIN;
const MS_IN_HOUR = SECS_IN_HOUR * MS_IN_SEC;
const MS_IN_MIN = SECS_IN_MIN * MS_IN_SEC;
const TIMER_UPDATE_FREQUENCY_MS = 1000;

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
    @Output() ended = new EventEmitter<void>();
    @Input('time') timeMins: number;
    @Input('title') timerTitle = 'Time left: ';

    public indicationColor = 'rgba(255, 0, 0, 0)';
    private leftTimeMs;

    constructor(private detectorRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.initTimer();
    }

    private initTimer(): void {
        const untilTimeMs = Date.now() + this.timeMins * MS_IN_MIN;

        this.leftTimeMs = untilTimeMs - Date.now();
        let indicationOpacity = 0;

        const interId = setInterval(() => {
            this.leftTimeMs = untilTimeMs - Date.now();
            indicationOpacity = this.manageEndTimeIndicationOpacity(indicationOpacity);
            if (this.leftTimeMs <= 0) {
                this.leftTimeMs = 0;
                clearInterval(interId);
                this.ended.emit();
            }
            this.detectorRef.detectChanges();
        }, TIMER_UPDATE_FREQUENCY_MS);

    }

    private manageEndTimeIndicationOpacity(indicationOpacity: number): number {
        const increaseOpacityStep = 0.1;
        const minSecsToIncreaseOpacity = 10;

        if (Math.round(this.leftTimeMs / MS_IN_SEC) < minSecsToIncreaseOpacity) {
            indicationOpacity += increaseOpacityStep;
            this.indicationColor = `rgba(255, 0, 0, ${indicationOpacity})`;
        }

        return indicationOpacity;
    }

    public get countDownString(): string {
        let cds = '';
        const hours = Math.floor(this.leftTimeMs / MS_IN_HOUR);
        const paddingSymbol = 0;

        if (hours) {
            cds += `${hours}:`;
        }

        const minutes = Math.floor((this.leftTimeMs + 1) / MS_IN_MIN) - hours * MINS_IN_HOUR;

        if (minutes || hours) {
            if (String(minutes).length === 1) {
                cds += paddingSymbol;
            }
            cds += `${minutes}:`;
        }

        const seconds = Math.round(this.leftTimeMs / MS_IN_SEC) - hours * SECS_IN_HOUR - minutes * SECS_IN_MIN;

        if (String(seconds).length === 1 && (minutes !== 0 || hours !== 0)) {
            cds += paddingSymbol;
        }
        cds += seconds;

        return cds;
    }
}
