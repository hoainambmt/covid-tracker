import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogOverviewComponent } from './dialog-overview.component';

describe('DialogOverviewComponent', () => {

  const mockData = {
    "ID": "386a9e8e-a5f3-4f50-966d-ff55379ac571",
    "Country": "Viet Nam",
    "CountryCode": "VN",
    "Slug": "vietnam",
    "NewConfirmed": 0,
    "TotalConfirmed": 2524,
    "NewDeaths": 0,
    "TotalDeaths": 35,
    "NewRecovered": 0,
    "TotalRecovered": 1920,
    "Date": "2021-03-09T13:07:42.396Z",
    "Premium": {}
  }

  let component: DialogOverviewComponent;
  let fixture: ComponentFixture<DialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogOverviewComponent],
      imports: [
        FlexLayoutModule,
        MatDialogModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit - should run', () => {

    expect(component.ngOnInit()).toBeUndefined();
  });

  it('ngOnInit - should run', () => {

    expect(component.detailCountry).toEqual(component.data);
  });
});
