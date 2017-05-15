import { Component, OnInit } from '@angular/core';
import { Upload } from "app/shared/data-model";
import { VideoUploadService } from "app/video/video.service";
import * as _ from "lodash";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  pageTitle: string = 'رفع الفيديو'
  selectedFiles: FileList;
  currentUpload: Upload;
  allowedExtension: string[] = ['mp4', 'webm', 'ogg'];
  isValidFile: boolean = true;


  constructor(
    private uploadService: VideoUploadService
  ) { }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }


  uploadMulti() {
    let files = this.selectedFiles;
    let filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      for (let i in this.allowedExtension) {
        if (this.getUploadExtension(this.currentUpload) === this.allowedExtension[i]) {
          this.uploadService.pushUpload(this.currentUpload);
        }
      }

    });
  }

  private getUploadExtension(upload: Upload): string {
    return upload.file.type.split('/')[1].toLowerCase();
  }

}
