import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FirebaseObjectObservable, AngularFire } from "angularfire2";
import { JobApplication } from "app/shared/data-model";

@Component({
    moduleId: module.id,
    selector: 'app-application-detail',
    templateUrl: 'application-detail.component.html',
    styleUrls: ['application-detail.component.css']
})

export class ApplicationDetailComponent implements OnInit {
    pageTitle: string = 'تفاصيل الطلب';
    application: FirebaseObjectObservable<JobApplication>;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id: string;
        this.route.params.subscribe(params => {
            id = params['id'];
        });
        this.application = this.af.database.object(`/jobs/${id}`)
     }
}