import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.scss']
})
export class AddleaveComponent implements OnInit {

  public add_leave =this.fb.group({
      day:[''],
      fromDate:[''],
      toDate:[''],
      reason:[''],

  });
  // snack bar start
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  //end

  constructor( private fb:FormBuilder,
     private api:AdminService,
     private router:Router,
     private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  submit(){
    // console.log( this.add_leave.value);
    const date = this.add_leave.value;
    const d = new Date(date.fromDate);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const d1 = new Date(date.toDate);
    const data1 = d1.getFullYear()+"-"+ ("0"+(d1.getMonth()+1)).slice(-2) +"-"+("0" + d1.getDate()).slice(-2);

    const paylode = {
      days: this.add_leave.value.day,
      fromdate:data,
      todate:data1,
      reason:this.add_leave.value.reason
    }
    this.api.addLeaves(paylode).subscribe((data:any)=>{
      if(data.success){
        this._snackBar.open("Add Leave Data Successfully ",'',
        {
          duration: this.durationInSeconds * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        setTimeout(() => {
        }, 2000);
        // alert("Add Leave Data ");
      }
     
      console.log(data.success);
    },err=>{
      console.log('dkd',err);
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });
    

  }

}
