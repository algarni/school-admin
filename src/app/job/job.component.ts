import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFire } from "angularfire2";
import { JobApplication } from "app/shared/data-model";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  pageTitle: string = 'طلب توظيف';
  jobApplication: JobApplication;
  jobApplicationFrom: FormGroup;

  constructor(
    private af: AngularFire,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.jobApplicationFrom = this.fb.group({
      fullName: ['', Validators.required],
      religion: ['', Validators.required],
      sex: ['', Validators.required],
      residentIn: ['', Validators.required],
      city: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      jobTitle: ['', Validators.required],
      qualification: ['', Validators.required],
      eduSpecialization: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  save() {
    this.jobApplication = {
      fullName: this.jobApplicationFrom.value.fullName,
      religion: this.jobApplicationFrom.value.religion,
      sex: this.jobApplicationFrom.value.sex,
      residentIn: this.jobApplicationFrom.value.residentIn,
      city: this.jobApplicationFrom.value.city,
      dateOfBirth: this.jobApplicationFrom.value.dateOfBirth,
      maritalStatus: this.jobApplicationFrom.value.maritalStatus,
      jobTitle: this.jobApplicationFrom.value.jobTitle,
      qualification: this.jobApplicationFrom.value.qualification,
      eduSpecialization: this.jobApplicationFrom.value.eduSpecialization,
      yearsOfExperience: this.jobApplicationFrom.value.yearsOfExperience,
      mobile: this.jobApplicationFrom.value.mobile,
      email: this.jobApplicationFrom.value.email,
      createdAt: new Date()
    };

    this.af.database.list('/jobs')
      .push(this.jobApplication);
  }

}
