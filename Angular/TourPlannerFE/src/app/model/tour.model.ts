import {FileHandle} from "./file-handle.model";

export interface Tour{
  tour_Id: number,
  tour_Highlights: string,
  tour_Name: string,
  tour_No_Of_Days: string,
  tour_Overview: string,
  tour_Price: number,
  tour_Images: FileHandle[]
}
