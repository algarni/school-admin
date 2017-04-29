import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AboutComponent } from './about/about/about.component';
import { NotificationComponent } from './notification/notification/notification.component';
import { NewsComponent } from './news/news/news.component';
import { MapComponent } from './map/map/map.component';
import { VideoComponent } from './video/video/video.component';
import { ImageComponent } from './image/image/image.component';
import { JobComponent } from './job/job/job.component';
import { ElearningComponent } from './elearning/elearning/elearning.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';

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
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
