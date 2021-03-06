import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FilterComponent } from "../common-component/filter/filter.component";

@Component({
  templateUrl: "classroom-dashboard.component.html",
  styleUrls: ["classroom-dashboard.component.scss"]
})
export class ClassroomDashboardComponent {
  filterPopupDialogRef: MatDialogRef<FilterComponent>;

  constructor(private dialog: MatDialog) {
    this.openDialog();
  }
  
  openDialog() {
    this.filterPopupDialogRef = this.dialog.open(FilterComponent, {
      width: "55%",
      height: "cal(59vh)"
    });
    this.filterPopupDialogRef.componentInstance.showClassroom = true;
    this.filterPopupDialogRef.disableClose = true;
  }
}
