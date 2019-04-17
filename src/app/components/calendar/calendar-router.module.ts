import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
    { path: '', component: CalendarComponent },
];
@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})

export class CalendarRouterModule {}
