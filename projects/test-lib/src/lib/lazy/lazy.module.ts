import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyChildrenComponent} from './lazy-children/lazy-children.component';


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
}
