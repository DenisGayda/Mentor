import { NgModule } from '@angular/core';
import { MentorPageComponent } from './mentor-page.component';
import { MentorPageRouterModule } from './mentor-page-router.module';
import { LearnCardModule } from '../../components/learn-card/learn-card.module';

@NgModule({
    imports: [ MentorPageRouterModule, LearnCardModule ],
    declarations: [ MentorPageComponent ],
})
export class MentorPageModule {}