import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { SampleWidgetModule } from './sample-widget.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    SampleWidgetModule,
    HttpClientModule,
  ],
  exports: [MainComponent]
})
export class MainModule { }
