import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Appointment } from '../../models/appointment.model';


interface Day {
  date: Date;
  appointments: Appointment[];
}

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
  providers: [DatePipe]
})
export class CalendarViewComponent implements OnInit {
  days: Day[] = [];
  currentDate: Date = new Date();

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const startDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const endDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    this.days = [];

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      this.days.push({
        date: new Date(date),
        appointments: []
      });
    }
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  addAppointment(appointment: Appointment) {
    const day = this.days.find(d => this.datePipe.transform(d.date, 'yyyy-MM-dd') === appointment.date);
    if (day) {
      day.appointments.push(appointment);
    }
  }

  deleteAppointment(day: Day, appointment: Appointment) {
    const index = day.appointments.indexOf(appointment);
    if (index > -1) {
      day.appointments.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<Appointment[]>, date: Date) {
    const previousDay = this.days.find(d => d.appointments === event.previousContainer.data);
    const currentDay = this.days.find(d => d.date.toDateString() === date.toDateString());

    if (previousDay && currentDay) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}