import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";

import { Upload } from "app/shared/data-model";
import { VideoUploadService } from "app/video/video.service";

@Component({
    moduleId: module.id,
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
    pageTitle: string = "معرض الفيديو";
    uploads: FirebaseListObservable<Upload[]>;


    constructor(private upSvc: VideoUploadService) { }

    ngOnInit() {
        this.uploads = this.upSvc.getUploads();
    }

    deleteUpload(upload: Upload) {
        this.upSvc.deleteUpload(upload);
    }
}