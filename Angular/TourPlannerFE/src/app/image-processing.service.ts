import { Injectable } from '@angular/core';
import {Tour} from "./model/tour.model";
import {FileHandle} from "./model/file-handle.model";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer:DomSanitizer) {}

  public createImages(tour: Tour){
    const tourImages: any[] = tour.tour_Images;

    const tourImagesToFileHandle: FileHandle[] = [];

    for (let i=0; i< tourImages.length;i++){
      const imageFileData = tourImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.image_picByte,imageFileData.image_type);
      const imageFile = new File([imageBlob],imageFileData.image_name, {type: imageFileData.type});
      const finalFileHandle : FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      tourImagesToFileHandle.push(finalFileHandle);
    }

    tour.tour_Images = tourImagesToFileHandle;
    return tour;
  }


  public dataURItoBlob(image_picByte: string, image_type: any) {
    const image_byteString = window.atob(image_picByte);
    const arrayBuffer = new ArrayBuffer(image_byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i=0; i<image_byteString.length; i++){
      int8Array[i] = image_byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: image_type});
    return blob;
  }
}

