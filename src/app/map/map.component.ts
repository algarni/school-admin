import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import { ISchoolCoordinates, SchoolCoordinates } from "app/shared/data-model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  pageTitle: string = "الوصول للمدارس";
  lat: number = 24.7;
  lng: number = 46.7;
  zoom: number = 16;

  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.af.database.object('/map')
      .subscribe(value => {
        this.lat = value.lat;
        this.lng = value.lng;
      });
  }

  locationSelected(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.af.database.object('/map').set({
      lat: this.lat,
      lng: this.lng
    });
  }

}
