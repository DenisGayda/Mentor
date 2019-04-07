import { NgModule } from '@angular/core';
import { MentorPageComponent } from './mentor-page.component';
import { MentorPageRouterModule } from './mentor-page-router.module';
import { TestModule } from '../../components/test/test.module';

@NgModule({
    imports: [
        MentorPageRouterModule,
        TestModule ],
    declarations: [ MentorPageComponent ],
})
export class MentorPageModule { }
