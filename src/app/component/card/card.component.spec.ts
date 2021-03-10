import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
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
  const mockGlobalData = {
    "NewConfirmed": 175328,
    "TotalConfirmed": 116996189,
    "NewDeaths": 4064,
    "TotalDeaths": 2597998,
    "NewRecovered": 165432,
    "TotalRecovered": 66343498,
    "Date": "2021-03-09T13:07:42.396Z"
  }
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [
        FlexLayoutModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.detailCountry = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOninit- should run with Country', () => {
    component.detailCountry = mockData;
    component.ngOnInit();
    expect(component.cardTile).toEqual('Viet Nam');
  });

  it('ngOninit- should run with Global', () => {
    component.detailCountry = mockGlobalData;
    component.ngOnInit();

    expect(component.cardTile).toEqual('Global');
  });
});
