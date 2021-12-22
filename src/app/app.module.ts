import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOverrideComponent } from './test-override/test-override.component';
import {TestLibModule} from "testLib";
import {LoggerFactory} from "rng-logger";
import { EagerChildrenOverrideComponent } from './eager-children-override/eager-children-override.component';
import { EagerNewChildrenComponent } from './eager-new-children/eager-new-children.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOverrideComponent,
    EagerChildrenOverrideComponent,
    EagerNewChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private readonly logger = LoggerFactory()

  constructor() {
    this.logger.warn("AppModule")
  }
}
