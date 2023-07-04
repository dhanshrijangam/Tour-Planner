import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour.model";
import {NgForm} from "@angular/forms";
import {TourService} from "../services/tour.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FileHandle} from "../model/file-handle.model";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  isNewTour = true;

  tour: Tour = {
    tour_Id: 0,
    tour_Highlights: "",
    tour_Name: "",
    tour_No_Of_Days: "",
    tour_Overview: "",
    tour_Price: 0,
    tour_Images: []
  }

  constructor(private tourService: TourService,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tour = this.activatedRoute.snapshot.data['tour'];
    if(this.tour && this.tour.tour_Id!=0){
      this.isNewTour = false;
    }
  }

  addTour(tourDetails: NgForm){

    const tourFormData = this.prepareFormData(this.tour);

    this.tourService.addTour(tourFormData).subscribe(
      (response:Tour) => {
        tourDetails.reset();
        this.tour.tour_Images = [];
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormData(tour: Tour): FormData{
    const formData = new FormData();

    formData.append(
      'tour',
      new Blob([JSON.stringify(tour)],{type: 'application/json'})
    );

    for(let i = 0; i < tour.tour_Images.length; i++){
      formData.append(
        'imageFile',
        tour.tour_Images[i].file,
        tour.tour_Images[i].file.name
      );
    }
    return formData;
  }


  onFileSelected({event}: { event: any }){
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.tour.tour_Images.push(fileHandle);
    }
  }

  removeImages(i: number){
    this.tour.tour_Images.splice(i, 1);
  }

  fileDropped(fileHandle: FileHandle){
    this.tour.tour_Images.push(fileHandle);
  }


}
