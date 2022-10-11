import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlusSizeDirective } from './libs/directives/plus-size.directive';
import { PlusComponent } from './components/plus/plus.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusSizeDirective,
    PlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
