import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    CalendarViewComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppointmentComponent 
  ]
})
export class CalendarModule { }
