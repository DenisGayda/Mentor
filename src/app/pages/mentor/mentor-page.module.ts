import { NgModule } from '@angular/core';
import { MentorPageComponent } from './mentor-page.component';
import { MentorPageRouterModule } from './mentor-page-router.module';

@NgModule({
    imports: [ MentorPageRouterModule ],
    declarations: [ MentorPageComponent ],
})
export class MentorPageModule {}
