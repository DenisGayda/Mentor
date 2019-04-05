import { NgModule } from '@angular/core';
import { MentorPageComponent } from './mentor-page.component';
import { MentorPageRouterModule } from './mentor-page-router.module';
import {AddUserModule} from '../../components/add-user/add-user.module';

@NgModule({
    imports: [MentorPageRouterModule, AddUserModule],
    declarations: [ MentorPageComponent ],
})
export class MentorPageModule { }
