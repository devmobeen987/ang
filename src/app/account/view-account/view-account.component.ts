import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeleteEmployeeComponent } from 'src/app/component/EmployeeCurd/delete-employee/delete-employee.component';
import { AccountdetailApi, AccountresponsApi, ApiResponseMsg } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss']
})
export class ViewAccountComponent implements OnInit {

  private ngUnsubscribe = new Subject<void>();
  public accountData = new MatTableDataSource<any[]>([]);
  public headercolumn: string[] = [
    'id',
    'account_no',
    'ifsc_code',
    'type',
    'account_name',
    'bank_name',
    'Action'];
  constructor(private api: AccountService, public dialog: MatDialog,  private _snackBar: MatSnackBar,public router:Router) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this. loadApi();
  }
  /**/
  loadApi(){
    let val:any = [];
    this.api.viewAccount().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:AccountresponsApi)=>{
      res.data.forEach((element:AccountdetailApi) => {
        val.push(element);
      });
      this.accountData = new MatTableDataSource(val);
      this.accountData.paginator = this.paginator;
      this.accountData.sort = this.sort;

    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
  }

  /**delete Account Api */
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  delete(id:any){
     console.log(id);
     const dialogref = this.dialog.open(DeleteEmployeeComponent);
     dialogref.afterClosed().subscribe((result: any) => {
       if (result.event == "no") {
         console.log('nosd');
       }
       if (result.event == "yes") {
         console.log('yeskk');
         this.api.deleteAccount(id).subscribe((data: ApiResponseMsg) => {
           console.log(data);
           this._snackBar.open(data.msg,'',
            {
              duration: this.durationInSeconds * 1000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });

           this.loadApi();
          },err=>{
            if(err.status=='401'){
              this.router.navigate(['/auth/login']);
            }
          });
       }
     });
  }

  /**delete Account Api */

}
