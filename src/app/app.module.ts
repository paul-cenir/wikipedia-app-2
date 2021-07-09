import { WikipediaService } from './wikipedia/http-services/wikipedia.service';
import { RouterModule } from '@angular/router';
import { AppWikipediaModule } from './wikipedia/wikipedia.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppWikipediaModule,
    HttpClientModule
  ],
  providers: [
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
