import { NgModule } from '@angular/core';
import { MentorPageComponent } from './mentor-page.component';
import { MentorPageRouterModule } from './mentor-page-router.module';
import { LearnCardModule } from '../../components/learn-card/learn-card.module';
import { TestModule } from '../../components/test/test.module';
import { CodeEditorModule } from '../../components/code-editor/code-editor.module';

@NgModule({
    imports: [
        MentorPageRouterModule,
        TestModule,
        LearnCardModule,
        CodeEditorModule,
    ],
    declarations: [ MentorPageComponent ],
})
export class MentorPageModule {}
