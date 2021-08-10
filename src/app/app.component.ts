import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-service';
  job: FormGroup;
  year = new Date;
  invalid_fields: boolean;
  constructor() {
    this.invalid_fields = false;
    this.job = new FormGroup({
      "mark": new FormControl('', Validators.required),
      "model": new FormControl('', Validators.required),
      "year": new FormControl('', [
        Validators.required,
        Validators.min(1970),
        Validators.max(this.year.getFullYear()),
        Validators.pattern('[0-9]{4,}')
      ]),
      "breakage": new FormControl(),
      "category_of_work": new FormControl('', Validators.required),
      "subcategory": new FormControl('', Validators.required),
      "select_emirate": new FormControl('', Validators.required),
      "select_area": new FormControl('', Validators.required),
      "truck": new FormControl(''),
      "pickup": new FormControl(''),
      "custom_parts": new FormControl(''),
      "date": new FormControl(''),
    });
  }
  onSubmit() {
    if (this.job.valid) {
      console.log('Success!');
      this.invalid_fields = false;
    }
    else {
      this.invalid_fields = true;
    }
  }
  clear() {
    this.job.reset()
    this.invalid_fields = false;
  }
}
