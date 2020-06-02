import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-c2",
  templateUrl: "./c2.component.html",
  styleUrls: ["./c2.component.css"],
})
export class C2Component implements OnInit {
  @Input() receivedParentMessage: string;
  @Output() valueChange = new EventEmitter();

  message = "Data from Child to Parent";
  constructor() {}

  ngOnInit(): void {}

  valueChanged() {
    this.valueChange.emit("Message From child!");
  }
}
