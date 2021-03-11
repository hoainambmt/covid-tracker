import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    })
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient)
  });

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('function - getSummary - should run', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getSummary()).toBeDefined();
  });

  it('function - getSummary - should return', () => {
    const service: DataService = TestBed.get(DataService);
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
    service.getSummary().subscribe((data) => {
      expect(data).toEqual(mockData);
    })
    const url = 'https://api.covid19api.com/summary';
    const req = httpMock.expectOne(url);
    req.flush(mockData);
    httpMock.verify();
  });
});
