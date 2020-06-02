import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { C1Component } from "./c1/c1.component";
import { C2Component } from "./c2/c2.component";
import { C3Component } from "./c3/c3.component";
import { HttpClientModule } from "@angular/common/http";
import { DynLinkComponent } from './dyn-link/dyn-link.component';
import { DynLinkDetailComponent } from './dyn-link-detail/dyn-link-detail.component';

@NgModule({
  declarations: [AppComponent, C1Component, C2Component, C3Component, DynLinkComponent, DynLinkDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
