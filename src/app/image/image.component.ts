import { Component, OnInit } from '@angular/core';
import { Upload } from "app/shared/data-model";
import { UploadService } from "app/shared/upload.service";
import * as _ from "lodash";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  pageTitle: string = "معرض الصور";
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }

  uploadMulti() {
    let files = this.selectedFiles;
    let filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.uploadService.pushUpload(this.currentUpload)
    });
  }

}
