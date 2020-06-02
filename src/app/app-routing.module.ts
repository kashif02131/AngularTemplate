import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { C1Component } from "./c1/c1.component";
import { C2Component } from "./c2/c2.component";
import { C3Component } from "./c3/c3.component";
import { DynLinkComponent } from "./dyn-link/dyn-link.component";

const routes: Routes = [
  { path: "C1", component: C1Component },
  // { path: "C2", component: C2Component },
  { path: "C3", component: C3Component },
  {
    path: "app-dyn-link",
    component: DynLinkComponent,
    children: [
      {
        path: "app-dyn-link/:type",
        component: DynLinkComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
