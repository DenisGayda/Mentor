import { NgModule } from '@angular/core';
import { TraineePageComponent } from './trainee-page.component';
import { TraineePageRouterModule } from './trainee-page-router.module';
import { LearnCardModule } from '../../components/learn-card/learn-card.module';
import { CodeEditorModule } from '../../components/code-editor/code-editor.module';

@NgModule({
    imports: [
        TraineePageRouterModule,
        LearnCardModule,
        CodeEditorModule,
    ],
    declarations: [ TraineePageComponent ],
})
export class TraineePageModule { }
