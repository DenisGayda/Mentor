import { Component, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> {
    @Input() items: T[];
    @Input() itemTemplate: TemplateRef<T>;
}
