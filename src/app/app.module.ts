import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AgmCoreModule } from "angular2-google-maps/core";

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
import { NotificationListComponent } from "app/notification/notification-list.component";
import { NewsListComponent } from "app/news/news-list.component";
import { ImageListComponent } from "app/image/image-list.component";
import { ImageUploadService } from "app/image/image-upload.service";
import { VideoUploadService } from "app/video/video.service";
import { VideoListComponent } from "app/video/video-list.component";
import { JobListComponent } from "app/job/job-list.component";
import { ApplicationDetailComponent } from "app/job/application-detail.component";

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
    NotificationListComponent,
    NewsComponent,
    NewsListComponent,
    MapComponent,
    VideoComponent,
    VideoListComponent,
    ImageComponent,
    ImageListComponent,
    JobComponent,
    JobListComponent,
    ApplicationDetailComponent,
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
      { path: 'notification-list', component: NotificationListComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news-list', component: NewsListComponent },
      { path: 'image', component: ImageComponent },
      { path: 'image-list', component: ImageListComponent },
      { path: 'video', component: VideoComponent },
      { path: 'video-list', component: VideoListComponent },
      { path: 'map', component: MapComponent },
      { path: 'job', component: JobComponent },
      { path: 'job-list', component: JobListComponent },
      { path: 'application-detail/:id', component: ApplicationDetailComponent },
      { path: 'elearning', component: ElearningComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtkPxYWOhwB2nYqwX2Td9aP0EjFkpJhv8'
    })
  ],
  providers: [ImageUploadService, VideoUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
