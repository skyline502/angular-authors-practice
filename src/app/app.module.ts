import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsListService } from './authors-list.service';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
