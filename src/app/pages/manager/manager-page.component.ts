import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-manager',
    templateUrl: './manager-page.component.html',
    styleUrls: ['./manager-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerPageComponent {}
