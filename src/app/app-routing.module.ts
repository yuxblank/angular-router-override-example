import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestOverrideComponent} from "./test-override/test-override.component";
import {EagerChildrenOverrideComponent} from "./eager-children-override/eager-children-override.component";
import {EagerNewChildrenComponent} from "./eager-new-children/eager-new-children.component";

const routes: Routes = [
  {
    path: "eager",
    component: TestOverrideComponent,
    children: [
      {
        path: "children",
        component: EagerChildrenOverrideComponent
      },
      {
        path: "children/new",
        component: EagerNewChildrenComponent
      }
    ]
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
export class AppRoutingModule {


}
