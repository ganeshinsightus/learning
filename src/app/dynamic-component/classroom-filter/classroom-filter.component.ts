import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
    templateUrl: "./classroom-filter.component.html",
    styleUrls: ["./classroom-filter.component.scss"]
  })
export class ClassroomFilterComponent {
  filterForm: FormGroup;
  showClassroom:boolean;
  showAttendance:boolean;
  constructor(
    public dialogref: MatDialogRef<ClassroomFilterComponent>,
    private filterBuilder: FormBuilder){

  }

  ngOnInit(){
    this.createForm();
  }

  closeDialog() {
    this.dialogref.close();
  }

  createForm() {
    this.filterForm = this.filterBuilder.group({
      grade: new FormControl(0),
      section: new FormControl(0),
      subject: new FormControl(0),
      student: new FormControl(0)
    });
  }
}