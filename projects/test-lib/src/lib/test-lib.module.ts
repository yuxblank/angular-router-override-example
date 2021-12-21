import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
  {
    component : TestLibComponent,
    path: "comp"
  },
  {
    path: "lazy",
    loadChildren: () => import("./lazy/lazy-routing.module").then(value => value.LazyRoutingModule)
  }
]



@NgModule({
  declarations: [
    TestLibComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    TestLibComponent
  ]
})
export class TestLibModule { }
