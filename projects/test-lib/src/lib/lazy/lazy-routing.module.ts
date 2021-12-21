import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LazyChildrenComponent} from "./lazy-children/lazy-children.component";
import {LazyModule} from "./lazy.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyModule,
    RouterModule.forChild([
      {
        component: LazyChildrenComponent,
        path: "lazy-component"
      }
    ])
  ]
})
export class LazyRoutingModule { }
