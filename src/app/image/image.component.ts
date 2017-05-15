import { Component, OnInit } from '@angular/core';
import { Upload } from "app/shared/data-model";
import * as _ from "lodash";
import { ImageUploadService } from "app/image/image-upload.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  pageTitle: string = "رفع الصور";
  selectedFiles: FileList;
  currentUpload: Upload;
  allowedExtension: string[] = ['jpeg', 'jpg', 'png'];
  isValidFile: boolean = true;


  constructor(
    private uploadService: ImageUploadService
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

  private getUploadExtension(upload: Upload): string{
    return upload.file.type.split('/')[1].toLowerCase();
  }

}
