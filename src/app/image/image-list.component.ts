import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";

import { Upload } from "app/shared/data-model";
import { ImageUploadService } from "app/image/image-upload.service";

@Component({
    moduleId: module.id,
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
    pageTitle: string = "معرض الصور";
    uploads: FirebaseListObservable<Upload[]>;
    // showSpinner: boolean = true;

    constructor(private upSvc: ImageUploadService) { }

    ngOnInit() {
        this.uploads = this.upSvc.getUploads();
        // this.uploads.subscribe(() => this.showSpinner = false)
    }

    deleteUpload(upload: Upload) {
        this.upSvc.deleteUpload(upload);
    }
}