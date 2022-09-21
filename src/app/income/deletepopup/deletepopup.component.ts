import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.scss']
})
export class DeletepopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  nodelete(): void {
    this.dialogRef.close({event:'no'});
  }

  Deleted(){
    this.dialogRef.close({event:'yes'});

  }

}
