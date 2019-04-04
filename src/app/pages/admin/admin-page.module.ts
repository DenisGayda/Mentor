import { NgModule } from '@angular/core';
import { AdminPageComponent } from './admin-page.component';
import { AdminPageRouterModule } from './admin-page-router.module';

@NgModule({
    imports: [ AdminPageRouterModule ],
    declarations: [ AdminPageComponent ],
})
export class AdminPageModule { }
