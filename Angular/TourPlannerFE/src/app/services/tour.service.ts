import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tour} from "../model/tour.model";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  public addTour(tour: FormData){
    return this.httpClient.post<Tour>("http://localhost:9090/addNewTour", tour);
  }

  public getAllTours(){
    return this.httpClient.get<Tour[]>("http://localhost:9090/getAllTours");
  }

  public getTourDetailById(tour_Id: string){
    return this.httpClient.get<Tour>("http://localhost:9090/getTourDetailById/"+tour_Id);
  }

  public deleteTour(tour_Id: number){
    return this.httpClient.delete("http://localhost:9090/deleteTourDetails/"+tour_Id);
  }
}
