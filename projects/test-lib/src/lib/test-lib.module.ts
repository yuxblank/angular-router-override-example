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
    loadChildren: () => import("./lazy/lazy.module").then(value => value.LazyModule)
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
