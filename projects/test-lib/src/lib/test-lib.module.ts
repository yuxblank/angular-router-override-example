import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import {RouterModule, Routes} from "@angular/router";
import {LoggerFactory} from "rng-logger";
import { TestLibChildrenComponent } from './test-lib-children/test-lib-children.component';


export const routes: Routes = [
  {
    component : TestLibComponent,
    path: "eager",
    children: [{
      component: TestLibChildrenComponent,
      path: "children"
    }]
  },
  {
    path: "lazy",
    loadChildren: () => import("./lazy/lazy-routing.module").then(value => value.LazyRoutingModule)
  }
]

@NgModule({
  declarations: [
    TestLibComponent,
    TestLibChildrenComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    TestLibComponent
  ]
})
export class TestLibModule {

  private readonly logger = LoggerFactory()

  constructor() {
    this.logger.warn("TestLibModule")
  }
}
