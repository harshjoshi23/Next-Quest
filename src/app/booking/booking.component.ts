import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity_plan, apiClient } from '../services/apiservice';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  available_plans: Activity_plan[];
  bookingForm: FormGroup;
  selectedDate: String;
  dateForm: FormGroup;
  activity_id: number;
  constructor(
    private apiclient: apiClient,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.activity_id = +this.route.snapshot.paramMap.get('id');
    this.apiclient.get_activity_plan(null, this.activity_id).subscribe(x => {
      this.available_plans = x;
      console.log(this.available_plans)
    });
    this.bookingForm = this.fb.group({
      travellers: this.fb.array([]),

    });
  }
  get dates(): FormArray {
    return this.dateForm.get("dates") as FormArray;
  }

  get travellers(): FormArray {
    return this.bookingForm.get("travellers") as FormArray;
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.bookingForm.value);
    console.log(this.selectedDate);
  }
  addTraveller() {
    const travellerForm = this.fb.group({
      fullName: ['', Validators.required],
      age: [''],
      height: [''],
      weight: [''],
      email: [''],
      emergency_contact: [''],
    });
    const x = this.bookingForm.get("travellers") as FormArray;
    x.push(travellerForm);
  }
  removeTraveller(index: number) {
    const x = this.bookingForm.get("travellers") as FormArray;
    x.removeAt(index);
  }
}
