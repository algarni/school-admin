import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2";
import 'rxjs/add/operator/map';
import { SchoolNotification, ISchoolNotification } from "app/shared/data-model";

@Component({
  moduleId: module.id,
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  pageTitle: string = 'الإشعارات';
  notificationForm: FormGroup;
  schoolNotification: SchoolNotification;
  schoolNotifications: FirebaseListObservable<ISchoolNotification[]>;

  constructor(
    private fb: FormBuilder,
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.notificationForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    this.schoolNotifications = this.af.database.list('/notification');
  }

  save() {
    this.schoolNotification = { title: this.notificationForm.value.title, body: this.notificationForm.value.body};
    console.log(this.schoolNotification);
    this.af.database.list('/notification').push(
      this.schoolNotification
    );
  }

}
