import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyChildrenComponent} from './lazy-children/lazy-children.component';
import {LoggerFactory} from "rng-logger";


@NgModule({
  declarations: [
    LazyChildrenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyChildrenComponent
  ]
})
export class LazyModule {
  private readonly logger = LoggerFactory()

  constructor() {
    this.logger.warn("LazyModule")
  }
}
