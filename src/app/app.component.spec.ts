import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from './material.module';
import { DataService } from './service/data.service';

describe('AppComponent', () => {

  const mockData = {
    "ID": "a80c0477-199b-49f0-831f-b3af7ff34254",
    "Message": "",
    "Global": {
      "NewConfirmed": 175328,
      "TotalConfirmed": 116996189,
      "NewDeaths": 4064,
      "TotalDeaths": 2597998,
      "NewRecovered": 165432,
      "TotalRecovered": 66343498,
      "Date": "2021-03-09T13:07:42.396Z"
    },
    "Countries": [{
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
  }
  class mockDataService {
    getSummary() {
      return of(mockData)
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FlexLayoutModule,
        MatTableModule,
        MaterialModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        CardComponent,
        TableComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: DataService, useClass: mockDataService }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'covid-tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('covid-tracker');
  });

  it('should have data', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    app.getSumaryData();
    fixture.detectChanges();
    expect(app.data).toEqual(mockData);
  });


  it('ngOnInit - should be run', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.ngOnInit()).toBeUndefined();
  });

  it('should have viet nam data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.getSumaryData();
    fixture.detectChanges();
    expect(app.vietNamDetail).toEqual(mockData.Countries[0]);
  });

  it('should have global data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.getSumaryData();
    fixture.detectChanges();
    expect(app.globalDetail).toEqual(mockData.Global);
  });

  it('should run function getDatabyCountry', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.getSumaryData();
    fixture.detectChanges()

    expect(app.getDataByCountry('VN')).toEqual(app.data.Countries[0]);
  });

  it('getDataByCountry - data is undefined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // app.getSumaryData();
    app.data = undefined;
    // fixture.detectChanges()

    expect(app.getDataByCountry('VN')).toEqual(undefined);
  });
});
