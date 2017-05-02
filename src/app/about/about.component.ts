import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import 'rxjs/add/operator/map';

import { AboutPage, IAboutPage } from "app/shared/data-model";


@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutForm: FormGroup;
  aboutPage: AboutPage = new AboutPage('عن مدارسنا');
  data: FirebaseObjectObservable<IAboutPage>;
  

  constructor(
    private formBuilder: FormBuilder,
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.aboutForm = this.formBuilder.group({
      body: ['', Validators.required],
    });

    this.af.database.object('/about')
      .subscribe(value => {
        this.aboutForm.patchValue({body: value.body})
      });
    
  }

  save() {
    this.af.database.object('/about').set({title: this.aboutPage.title, body: this.aboutForm.value.body})
  }

}
