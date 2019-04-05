import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorPageComponent } from './mentor-page.component';

const routes: Routes = [
    { path: '', component: MentorPageComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})

export class MentorPageRouterModule {}
