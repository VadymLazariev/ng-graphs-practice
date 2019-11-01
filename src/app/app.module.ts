import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomChartsModule} from './custom-charts/custom-charts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
