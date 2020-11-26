import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ExMarksPipe } from './pipes/ex-marks.pipe'
import { FilterPipe } from './pipes/filter.pipe'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [AppComponent, ExMarksPipe, FilterPipe],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
