import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TourComponent} from "./tour/tour.component";
import {ShowTourDetailsComponent} from "./show-tour-details/show-tour-details.component";
import {TourResolveServiceService} from "./tour-resolve-service.service";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addNewTour',component:TourComponent,
    resolve: {
    tour: TourResolveServiceService
  }
  },
  {path:'showTourDetails',component:ShowTourDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
