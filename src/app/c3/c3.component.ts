import { Component, OnInit } from "@angular/core";
import { WebServiceService } from "../web-service.service";

@Component({
  selector: "app-c3",
  templateUrl: "./c3.component.html",
  styleUrls: ["./c3.component.css"],
})
export class C3Component implements OnInit {
  users = [
    {
      name: "Kashif",
      grade: "5",
    },
    {
      name: "Saquib",
      grade: "6",
    },
    {
      name: "Haaris",
      grade: "7",
    },
  ];

  constructor(private service: WebServiceService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      console.log(data);
      console.log(this.users);
    });
  }
}
