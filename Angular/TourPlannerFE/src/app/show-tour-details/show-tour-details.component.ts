import { Component, OnInit } from '@angular/core';
import {TourService} from "../services/tour.service";
import {Tour} from "../model/tour.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ShowTourImagesDialogComponent} from "../show-tour-images-dialog/show-tour-images-dialog.component";
import {ImageProcessingService} from "../image-processing.service";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-tour-details',
  templateUrl: './show-tour-details.component.html',
  styleUrls: ['./show-tour-details.component.css']
})
export class ShowTourDetailsComponent implements OnInit {

  tourDetails: Tour[] = [];
  displayedColumns: string[] = ['tour_Id','tour_Name','tour_No_Of_Days','tour_Price','tour_Overview','tour_Highlights','tour_Images','tour_Edit','tour_Delete'];

  constructor(private tourService: TourService,
              public imagesDialog: MatDialog,
              private imageProcessingService: ImageProcessingService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllTours();
  }

  public getAllTours() {
    this.tourService.getAllTours()
      .pipe(
        map((x: Tour[], i) => x.map((tour: Tour) => this.imageProcessingService.createImages(tour)))
        )
      .subscribe(
      (resp: Tour[]) => {
        console.log(resp);
        this.tourDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  deleteTour({tour_Id}: { tour_Id: any }){
    this.tourService.deleteTour(tour_Id).subscribe(
      (resp) => {
        this.getAllTours();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  showImages(tour: Tour) {
    console.log(tour);
    this.imagesDialog.open(ShowTourImagesDialogComponent, {
      data:{
        images: tour.tour_Images
      },
      height:'500px',
      width:'800px'
    });
  }

  editTourDetails({tour_Id}: { tour_Id: any }){
    this.router.navigate(['/addNewTour',{tour_Id: tour_Id }]);
  }
}
