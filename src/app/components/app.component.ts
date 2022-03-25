import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  panelOpenState = false;

  @ViewChild("sidenav", null) sidenav: MatSidenav;

  sidenavOpened = true;

  close() {
    this.sidenav.close();
    this.sidenavOpened = false;
  }

  open() {
    this.sidenav.open();
    this.sidenavOpened = true;
  }
}
