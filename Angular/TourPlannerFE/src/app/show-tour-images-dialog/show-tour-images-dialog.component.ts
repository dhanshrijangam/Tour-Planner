import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-show-tour-images-dialog',
  templateUrl: './show-tour-images-dialog.component.html',
  styleUrls: ['./show-tour-images-dialog.component.css']
})
export class ShowTourImagesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages() {
    console.log(this.data)
  }
}
