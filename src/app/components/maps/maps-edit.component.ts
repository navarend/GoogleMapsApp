import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-maps-edit',
  templateUrl: './maps-edit.component.html',
  styleUrls: ['./maps-edit.component.css']
})
export class MapsEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    public builderForm: FormBuilder,
    public dialogRef: MatDialogRef<MapsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = builderForm.group({
        'title': data.title,
        'description': data.description
      });
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  SaveChanges(){
    this.dialogRef.close(this.form.value);
  }

}
