import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTourDetailsComponent } from './show-tour-details.component';

describe('ShowTourDetailsComponent', () => {
  let component: ShowTourDetailsComponent;
  let fixture: ComponentFixture<ShowTourDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTourDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
