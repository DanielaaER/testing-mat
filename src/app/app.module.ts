import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { HttpClientModule } from '@angular/common/http';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { SimpsonComponent } from './simpson/simpson.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StddevComponent,
    LinearRegressionComponent,
    CorrelationComponent,
    SimpsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
