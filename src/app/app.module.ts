import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './service/interceptor.service';
import { DialogOverviewComponent } from './component/dialog-overview/dialog-overview.component';
import { MatDialogModule, MatDialogRef } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
  ],
  exports: [
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewComponent]
})
export class AppModule { }
