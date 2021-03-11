import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CountryData } from 'src/app/model/country-data.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: '../card/card.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent extends CardComponent implements OnInit {

  constructor(
    // public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CountryData) {
    super();
    this.detailCountry = data;
  }

  ngOnInit() {
    super.ngOnInit()
  }

}
