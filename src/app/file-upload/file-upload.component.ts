import { Component, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { NgClass, NgStyle } from '@angular/common';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = '';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']

})

export class FileUploadComponent {
  @ViewChild('selectedFile') selectedFile: any;

  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  public removeFile(item) {
    this.uploader.removeFromQueue(item);
    this.selectedFile.nativeElement.value = '';
    item.remove();
  }

  public cancelFile(item) {
    this.uploader.removeFromQueue(item);
    this.selectedFile.nativeElement.value = '';
    item.cancel();
  }

  public uploadFile(item) {
    var me = this;
    setTimeout(function () {
      me.cancelFile(item);
    }, 3000);
  }
}
