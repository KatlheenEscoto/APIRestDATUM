import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent implements OnInit {

  job: Job = new Job();
  fullName = new FormControl('');
  
  jobForm: FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      fullName: ['', Validators.required, Validators.pattern('^[a-zA-Z]+$')],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(250)]],
      file: ['', Validators.required]
    }
    );
  }

    // convenience getter for easy access to form fields
    get f() { return this.jobForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.jobForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.jobForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.jobForm.reset();
    }

}
