import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-daily-update',
  templateUrl: './add-daily-update.component.html',
  styleUrls: ['./add-daily-update.component.scss']
})
export class AddDailyUpdateComponent implements OnInit {

  public employee_daily_update:any =this.fb.group({
    starttime:[''],
    endtime:[''],
    date:[''],
    update:[''],
  });
   // snack bar start
   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';
   durationInSeconds = 2;
   //end
  constructor(
    private fb:FormBuilder, 
    private api:AdminService,
    private _snackBar: MatSnackBar

    ) { }

  ngOnInit(): void {
  }

  update(){

    const date = this.employee_daily_update.value;
    const d = new Date(date.date);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);


    const paylode = {
      date:data,
      starttime:this.employee_daily_update.value.starttime,
      endtime:this.employee_daily_update.value.endtime,
      update:this.employee_daily_update.value.update,
    }

    console.log(paylode);
    this.api.EmployeeDailyupdate(paylode).subscribe((data:any)=>{
        console.log(data);
        // alert(data.success);
        this._snackBar.open(data.success,'',
        {
          duration: this.durationInSeconds * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        setTimeout(() => {
        }, 2000);

        
    });

  }

}
