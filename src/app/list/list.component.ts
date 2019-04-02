import { Component, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() items: Array<any>;
  @Input() itemTemplate: TemplateRef<any>;
}
