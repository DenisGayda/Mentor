import { NgModule } from '@angular/core';
import { TraineePageComponent } from './trainee-page.component';
import { TraineePageRouterModule } from './trainee-page-router.module';
import { LearnCardModule } from '../../components/learn-card/learn-card.module';
import { CodeEditorModule } from '../../components/code-editor/code-editor.module';
import { QuizModule } from '../../components/quiz/quiz.module';
import { TestService } from '../../services/TestService/test-service.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        TraineePageRouterModule,
        LearnCardModule,
        CodeEditorModule,
        QuizModule,
        CommonModule,
    ],
    providers: [ TestService ],
    declarations: [ TraineePageComponent ],
})
export class TraineePageModule { }
