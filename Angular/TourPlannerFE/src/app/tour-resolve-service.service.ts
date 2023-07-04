import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Tour} from "./model/tour.model";
import {map, Observable, of} from "rxjs";
import {TourService} from "./services/tour.service";
import {ImageProcessingService} from "./image-processing.service";

@Injectable({
  providedIn: 'root'
})
export class TourResolveServiceService implements Resolve<Tour>{

  constructor(private tourService: TourService,
              private imageProcessingService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tour> {
    const id = route.paramMap.get("tour_Id");
    if(id){
      return this.tourService.getTourDetailById(id)
        .pipe(
          map(p => this.imageProcessingService.createImages(p))
        );
    }
    else{
      return of(this.getTourDetails());
    }
  }

  getTourDetails() {
    return {
      tour_Id: 0,
      tour_Highlights: "",
      tour_Name: "",
      tour_No_Of_Days: "",
      tour_Overview: "",
      tour_Price: 0,
      tour_Images: []
    };
  }
}
