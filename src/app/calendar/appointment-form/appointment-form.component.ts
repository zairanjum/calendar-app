import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  @Output() addAppointment = new EventEmitter<Appointment>();

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = this.appointmentForm.value;
      this.addAppointment.emit(appointment);
      this.appointmentForm.reset(); 
    }
  }
}
