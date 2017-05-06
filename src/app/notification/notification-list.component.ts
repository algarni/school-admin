import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Component({
    moduleId: module.id,
    selector: 'app-notification-list',
    templateUrl: 'notification-list.component.html',
    styleUrls: ['notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
    pageTitle: string = "الإشعارات السابقة";
    notificationList: FirebaseListObservable<any[]>;

    constructor(
        private af: AngularFire
    ) { }

    ngOnInit() {
        this.notificationList = this.af.database.list('/notification');
    }
}