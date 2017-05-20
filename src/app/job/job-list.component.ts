import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Component({
    moduleId: module.id,
    selector: 'app-job-list',
    templateUrl: 'job-list.component.html',
    styleUrls: ['job-list.component.css']
})

export class JobListComponent implements OnInit {
    pageTitle: string = "طلبات التوظيف";
    jobApplications: FirebaseListObservable<any[]>;

    constructor(
        private af: AngularFire
    ) { }

    ngOnInit() {
        this.jobApplications = this.af.database.list('/jobs');
        console.log(this.jobApplications);
    }
}