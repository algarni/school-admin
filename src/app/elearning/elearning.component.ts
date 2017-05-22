import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import { Elearning } from "app/shared/data-model";

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.css']
})
export class ElearningComponent implements OnInit {
  elearningForm: FormGroup;
  elearning: Elearning = new Elearning('التعليم الإلكتروني');
 


  constructor(
    private formBuilder: FormBuilder,
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.elearningForm = this.formBuilder.group({
      body: ['', Validators.required],
    });

    this.af.database.object('/elearning')
      .subscribe(value => {
        this.elearningForm.patchValue({ body: value.body })
      });

  }

  save() {
    this.elearning.body = this.elearningForm.value.body;
    this.af.database.object('/elearning').set({ title: this.elearning.title, body: this.elearning.body })
  }

}
