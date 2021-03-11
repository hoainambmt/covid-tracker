import { Component, Input, OnInit } from '@angular/core';
import { CountryData } from 'src/app/model/country-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() detailCountry: CountryData | any;
  cardTile: string;

  constructor() { }

  ngOnInit() {
    const { Country = '' } = this.detailCountry || {}
    this.cardTile = Country ? Country : 'Global';
  }

}
