import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CountryData } from './model/country-data.model';
import { CovidData } from './model/covid-data.model';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid-tracker';

  data: CovidData;
  countriesData: CountryData[];
  vietNamDetail;
  globalDetail;

  constructor(
    private myDataService: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getSumaryData();
  }

  getSumaryData() {
    this.myDataService.getSummary().subscribe((data) => {
      this.data = data;
      this.vietNamDetail = this.getDataByCountry('VN');
      this.globalDetail = this.data.Global;
      this.countriesData = this.data.Countries;
    })
  }

  getDataByCountry(countryCode: string): CountryData {
    const { Countries = [] } = this.data || {};
    return Countries.find(countryData => (countryData.CountryCode === countryCode))
  }

}
