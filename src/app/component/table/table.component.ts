import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() data;
  dataSource;
  displayedColumns: string[] = ['Country', 'NewConfirmed', 'TotalConfirmed', 'TotalRecovered', 'detail'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  searchCountry(event) {
    const value = event.target.value;
    console.log(value);
    const filterValue = this.data.filter((country) => {
      return country.Country.toLowerCase().includes(value)
    });
    this.dataSource = new MatTableDataSource(filterValue);
    this.dataSource.sort = this.sort;
  }

  openDialog(countryCode: string) {
    const countryData = this.data.find(country => country.CountryCode === countryCode)
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '1000px',
      data: countryData,
    });

  }

}
