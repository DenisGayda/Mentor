import { NgModule } from '@angular/core';
import { ManagerPageComponent } from './manager-page.component';
import { ManagerPageRouterModule } from './manager-page-router.module';

@NgModule({
    imports: [ ManagerPageRouterModule ],
    declarations: [ ManagerPageComponent ],
})
export class ManagerPageModule { }
