import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiResponseData, ApiResponseMsg, singalAccountdetailApi } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  public edit_account_form = this.fb.group({
    account_no:[''],
    ifsc_code:[''],
    type:[''],
    account_name:[''],
    bank_name:[''],
  });
  private ngUnsubscribe = new Subject<void>();
  public id:any;
  public editAccountdata:any;
  public accountType:any[] = ['Savings Account','Current Account','Recurring Deposit Account','Fixed Deposit Account','DEMAT Account','NRI Account']
  constructor(private fb:FormBuilder, 
    private api:AccountService,
    public router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
      this.id = data.id;
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
   this.loadeApi();
  }
  /** get Singal Data to the Account list  */
  loadeApi(){
    console.log('hjdj');
    this.api.singalAccountdata(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:ApiResponseData)=>{
        this.edit_account_form.patchValue({
          account_no:res.data.account_no,
          ifsc_code:res.data.ifsc_code,
          type:res.data.type,
          account_name:res.data.account_name,
          bank_name:res.data.bank_name,
        })
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
  }
  /** get Singal Data to the Account  */

  /**Update Account data Api */
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  update(){
    this.api.updateAccountdata(this.id,this.edit_account_form.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:ApiResponseMsg)=>{
      // console.log(res.)
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
    });
  }
  /**Update Account data Api */

}
