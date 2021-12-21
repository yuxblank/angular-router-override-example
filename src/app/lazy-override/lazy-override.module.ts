import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LazyComponentOverrideComponent} from './lazy-component-override/lazy-component-override.component';
import {LazyModule} from "testLib";


@NgModule({
  declarations: [
    LazyComponentOverrideComponent
  ],
  imports: [
    CommonModule,
    LazyModule,  // we only import the module not containing forChild
    RouterModule.forChild([   {
      component: LazyComponentOverrideComponent,
      path: "lazy-component"
    }]),
  ]
})
export class LazyOverrideModule {

  constructor() {

  }
}
