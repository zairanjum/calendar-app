import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarViewComponent },
  { path: 'appointment', component: AppointmentFormComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
