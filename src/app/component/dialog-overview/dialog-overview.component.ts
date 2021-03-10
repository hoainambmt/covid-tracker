import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: '../card/card.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent extends CardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    super();
    this.detailCountry = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    super.ngOnInit()
  }

}
