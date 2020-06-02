import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-dyn-link",
  templateUrl: "./dyn-link.component.html",
  styleUrls: ["./dyn-link.component.css"],
})
export class DynLinkComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  public id: string;
  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }
}
