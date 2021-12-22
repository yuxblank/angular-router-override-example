import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LazyComponentOverrideComponent} from './lazy-component-override/lazy-component-override.component';
import {LazyModule, LazyRoutingModule} from "testLib";
import {LoggerFactory} from "rng-logger";
import { LazyNewRouteComponent } from './lazy-new-route/lazy-new-route.component';


@NgModule({
  declarations: [
    LazyComponentOverrideComponent,
    LazyNewRouteComponent
  ],
  imports: [
    CommonModule,
    LazyModule, // we only import the module not containing forChild
    RouterModule.forChild([   {
      component: LazyComponentOverrideComponent,
      path: "lazy-component",
    },
      {
        component: LazyNewRouteComponent,
        path: "new-path",
      }
    ]),
  ]
})
export class LazyOverrideModule {
  private readonly logger = LoggerFactory()
  constructor() {
    this.logger.warn("LazyOverrideModule")
  }
}
