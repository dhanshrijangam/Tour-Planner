import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTourImagesDialogComponent } from './show-tour-images-dialog.component';

describe('ShowTourImagesDialogComponent', () => {
  let component: ShowTourImagesDialogComponent;
  let fixture: ComponentFixture<ShowTourImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTourImagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTourImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
