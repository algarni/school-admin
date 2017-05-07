import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from "angularfire2";
import * as firebase from 'firebase';

import { Upload } from "app/shared/data-model";

@Injectable()
export class UploadService {
    // private basePath: string = '/uploads';
    private uploadTask: firebase.storage.UploadTask;
    uploads: FirebaseListObservable<Upload[]>;

    constructor(
        private af: AngularFire,
        private db: AngularFireDatabase
    ) { }

    // getUploads(query = {}) {
    //     this.uploads = this.db.list(this.basePath, {
    //         query: query
    //     });
    //     return this.uploads
    // }

    getImages(query = {}) {
        let basePath = '/images';
        this.uploads = this.db.list(basePath, {
            query: query
        });
        return this.uploads
    }

    getVideos(query = {}) {
        let basePath = '/videos';
        this.uploads = this.db.list(basePath, {
            query: query
        });
        return this.uploads
    }

    // deleteUpload(upload: Upload) {
    //     this.deleteFileData(upload.$key)
    //         .then(() => {
    //             this.deleteFileStorage(upload.name)
    //         })
    //     .catch(error => console.log(error))
    // }

    pushUpload(upload: Upload) {
        let basePath = '/' + upload.file.type.split('/')[0];
        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(`${basePath}s/${upload.file.name}`).put(upload.file);

        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                //upload in progress
                upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            },
            (error) => {
                // upload failed
                console.log(error)
            },
            () => {
                // upload success
                upload.url = this.uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;
                this.saveFileData(upload);
            }
        );
    }

    private saveFileData(upload: Upload) {
        let basePath = '/' + upload.file.type.split('/')[0];
        this.db.list(`${basePath}s/`).push(upload);
    }

    // private deleteFileData(key: string) {
    //     return this.db.list(`${this.basePath}/`).remove(key);
    // }

    // private deleteFileStorage(name: string) {
    //     let strorageRef = firebase.storage().ref();
    //     strorageRef.child(`${this.basePath}/${name}`).delete();
    // }
}