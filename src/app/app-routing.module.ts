import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestOverrideComponent} from "./test-override/test-override.component";

const routes: Routes = [
  {
    path: "eager",
    component: TestOverrideComponent
  },
  {
    path: "lazy",
    loadChildren: () => import("./lazy-override/lazy-override.module").then(m => m.LazyOverrideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
