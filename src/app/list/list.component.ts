import { Component, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() items: Array<any>;
  @Input() itemTemplate: TemplateRef<any>;
}
