import { NgModule } from '@angular/core';
import { MentorPageComponent } from './mentor-page.component';
import { MentorPageRouterModule } from './mentor-page-router.module';
import { TestModule } from '../../components/test/test.module';
import { LearnCardModule } from '../../components/learn-card/learn-card.module';

@NgModule({
    imports: [
        MentorPageRouterModule,
        TestModule,
        LearnCardModule,
    ],
    declarations: [ MentorPageComponent ],
})
export class MentorPageModule {}
