import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOverrideComponent } from './test-override/test-override.component';
import {TestLibModule} from "testLib";

@NgModule({
  declarations: [
    AppComponent,
    TestOverrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
