import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatTableModule } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

import { TableComponent } from './table.component';

describe('TableComponent', () => {

  const mockData = [{
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
  }]
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, DialogOverviewComponent],
      imports: [
        FlexLayoutModule,
        MatTableModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [DialogOverviewComponent] } });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit - should run', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('searchCountry - should run', () => {
    const event = {
      target: {
        value: 'Viet'
      }
    }
    expect(component.searchCountry(event)).toBeUndefined();
  });

  it('openDialog - should run', () => {
    expect(component.openDialog('VN')).toBeUndefined();
  });


});
