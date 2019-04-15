import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const MS_IN_SEC = 1000;
const SECS_IN_MIN = 60;
const MINS_IN_HOUR = 60;
const TIMER_UPDATE_FREQUENCY_MS = 1000;

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
    @Output() ended = new EventEmitter<void>();
    @Input() time: number;
    @Input() title = 'Time left: ';

    public indicationColor = 'rgba(255, 0, 0, 0)';
    private indicationOpacity = 0;
    private intervalId: number;
    private leftTimeMs: number;
    private untilTimeMs: number;

    constructor(private detectorRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.initTimer();
    }

    private initTimer(): void {
        this.untilTimeMs = Date.now() + this.time * SECS_IN_MIN * MS_IN_SEC;
        this.leftTimeMs = this.untilTimeMs - Date.now();
        this.intervalId = setInterval(this.tickTimer.bind(this), TIMER_UPDATE_FREQUENCY_MS);
    }

    private tickTimer(): void {
        this.leftTimeMs = this.untilTimeMs - Date.now();
        this.manageEndTimeIndicationOpacity();

        this.detectorRef.detectChanges();

        if (this.leftTimeMs <= 0) {
            this.stopTimer();
        }
    }

    private stopTimer(): void {
        this.leftTimeMs = 0;
        clearInterval(this.intervalId);
        this.ended.emit();
    }

    private manageEndTimeIndicationOpacity(): void {
        const increaseOpacityStep = 0.1;
        const minSecsToIncreaseOpacity = 10;

        if (Math.round(this.leftTimeMs / MS_IN_SEC) < minSecsToIncreaseOpacity) {
            this.indicationOpacity += increaseOpacityStep;
            this.indicationColor = `rgba(255, 0, 0, ${this.indicationOpacity})`;
        }
    }

    public get countDownString(): string {
        let cds = '';
        let minsAndSecsLength = 1;
        const paddingSymbol = '0';

        if (this.hours) {
            cds += `${this.hours}:`;
        }

        if (this.minutes || this.hours) {
            minsAndSecsLength = 2;
            cds += `${String(this.minutes).padStart(minsAndSecsLength, paddingSymbol)}:`;
        }

        cds += `${String(this.seconds).padStart(minsAndSecsLength, paddingSymbol)}`;

        return cds;
    }

    private get hours(): number {
        return Math.floor(this.leftTimeMs / (MINS_IN_HOUR * SECS_IN_MIN * MS_IN_SEC));
    }

    private get minutes(): number {
        return Math.floor((this.leftTimeMs + 1) / (SECS_IN_MIN * MS_IN_SEC)) - this.hours * MINS_IN_HOUR;
    }

    private get seconds(): number {
        return Math.round(this.leftTimeMs / MS_IN_SEC) - this.hours * MINS_IN_HOUR * SECS_IN_MIN - this.minutes * SECS_IN_MIN;
    }
}
