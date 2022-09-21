import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiResponseMsg } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  private ngUnsubscribe = new Subject<void>();
  public add_account_form = this.fb.group({
    account_no:[''],
    ifsc_code:[''],
    type:[''],
    account_name:[''],
    bank_name:[''],
  });
  public accountType:any[] = ['Savings Account','Current Account','Recurring Deposit Account','Fixed Deposit Account','DEMAT Account','NRI Account']
  constructor(private fb:FormBuilder, 
    private api:AccountService,
    public router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  submit(){
    console.log(this.add_account_form.value);
    this.api.addAccount(this.add_account_form.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:ApiResponseMsg)=>{
      console.log(res.msg);
      this._snackBar.open(res.msg,'',
      {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    })
  }

}
