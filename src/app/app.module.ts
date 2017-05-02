import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';
import { AboutComponent } from "app/about/about.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { NotificationComponent } from "app/notification/notification.component";
import { NewsComponent } from "app/news/news.component";
import { MapComponent } from "app/map/map.component";
import { VideoComponent } from "app/video/video.component";
import { ImageComponent } from "app/image/image.component";
import { JobComponent } from "app/job/job.component";
import { ElearningComponent } from "app/elearning/elearning.component";
import { ContactUsComponent } from "app/contact-us/contact-us.component";

export const firebaseConfig = {
  apiKey: "AIzaSyBFYSIrNmiEndZqrFJ-GcHecrOXxwPrPB4",
  authDomain: "myschool-c5d0a.firebaseapp.com",
  databaseURL: "https://myschool-c5d0a.firebaseio.com",
  projectId: "myschool-c5d0a",
  storageBucket: "myschool-c5d0a.appspot.com",
  messagingSenderId: "102565151889"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    NotificationComponent,
    NewsComponent,
    MapComponent,
    VideoComponent,
    ImageComponent,
    JobComponent,
    ElearningComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
