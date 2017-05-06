import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { ISchoolNews } from "app/shared/data-model";

@Component({
  selector: 'app-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  pageTitle: string = "أخبار المدارس";
  items: FirebaseListObservable<ISchoolNews[]>;

  constructor(
    private af: AngularFire,
  ) { }

  ngOnInit() {
    this.items = this.af.database.list('/news');
  }

}
