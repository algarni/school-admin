import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AngularFire } from "angularfire2";

import { ContactUs } from "app/shared/data-model";


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 contactUsForm: FormGroup;
  contactUs: ContactUs = new ContactUs('اتصل بنا');
 


  constructor(
    private formBuilder: FormBuilder,
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      body: ['', Validators.required],
    });

    this.af.database.object('/contact-us')
      .subscribe(value => {
        this.contactUsForm.patchValue({ body: value.body })
      });

  }

  save() {
    this.contactUs.body = this.contactUsForm.value.body;
    this.af.database.object('/contact-us').set({ title: this.contactUs.title, body: this.contactUs.body })
  }
}
