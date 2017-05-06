import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FirebaseObjectObservable, AngularFire, FirebaseListObservable } from "angularfire2";
import { ISchoolNews, SchoolNews } from "app/shared/data-model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  pageTitle: string = "خبر جديد";
  schoolNews: SchoolNews;
  schoolNewsForm: FormGroup;

  constructor(
    private af: AngularFire,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.schoolNewsForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  save() {
    this.schoolNews = {
      title: this.schoolNewsForm.value.title,
      body: this.schoolNewsForm.value.body
    };

    this.af.database.list('/news')
      .push(this.schoolNews);
  }

}
