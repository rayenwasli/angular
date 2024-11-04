import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService
  ) {
    this.reservationForm = this.formBuilder.group({
      idReservation: ['', Validators.required],
      anneeUniversitaire: ['', Validators.required],
      estValide: [false]
    });
  }

  ngOnInit(): void {}

  submitReservation(): void {
    if (this.reservationForm.valid) {
      const reservationData = this.reservationForm.value;
      this.reservationService.addReservation(reservationData).subscribe(
        response => {
          console.log('Reservation added successfully:', response);
          this.successMessage = 'Reservation added successfully!';
          this.reservationForm.reset(); // Optional: reset form after success
        },
        error => {
          console.error('Error adding reservation:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
