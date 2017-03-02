import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { NgClass, NgStyle } from '@angular/common';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']

})

export class FileUploadComponent {

  public uploader: FileUploader =
  new FileUploader({ autoUpload: false, url: URL, maxFileSize: 16000000, allowedFileType: ['xls', 'xlsx'] });


  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  // consoleout() {

  //   console.log('this.uploader.options  ', this.uploader.options);
  //   console.log('this.uploader._nextIndex  ', this.uploader._nextIndex);
  //   console.log('this.uploader.queue  ', this.uploader.queue);
  //   console.log('this.uploader._fileTypeFilter.name  ', this.uploader._fileTypeFilter.name);
  //   console.log('this.uploader._fileSizeFilter  ', this.uploader._fileSizeFilter);
  // }

}