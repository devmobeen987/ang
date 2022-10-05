import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeleteEmployeeComponent } from 'src/app/component/EmployeeCurd/delete-employee/delete-employee.component';
import { AddContractorApi, reaponsContractorApi, reqContractorApi } from 'src/app/model/contractor.model';
import { ContractorService } from 'src/app/service/contractor.service';
// import { ExpanseService } from 'src/app/service/expanse.service';

@Component({
  selector: 'app-list-contractors',
  templateUrl: './list-contractors.component.html',
  styleUrls: ['./list-contractors.component.scss']
})
export class ListContractorsComponent implements OnInit {
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public loading:boolean = false;
  public headercolumn: string[] = [
    'id',
    'firstname',
    'lastname',
    'eamil',
    'status',
    'join_date',
    'type',
    'address',
    'action'
  ];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  private ngUnsubscribe = new Subject<void>();
  public ContractorDetailData:reaponsContractorApi[] = [];

  constructor(private http: HttpClient,
    public router:Router,
    private Api:ContractorService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.viewContractDetail();
  }
  viewContractDetail(){
  this.Api.viewContractor().pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:reqContractorApi)=>{
    console.log('dd',e.data);
    this.ContractorDetailData = e.data;
  })
  }

  delete(id:any){
    console.log(id);
    const dialogref = this.dialog.open(DeleteEmployeeComponent);
    dialogref.afterClosed().subscribe((result: any) => {
      if (result.event == "no") {
        console.log('nosd');
      }
      if (result.event == "yes") {
        console.log('yeskk');
        this.Api.deleteContractor(id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((data:AddContractorApi) => {
          console.log(data);
          this._snackBar.open(data.msg,'',
           {
             duration: this.durationInSeconds * 1000,
             horizontalPosition: this.horizontalPosition,
             verticalPosition: this.verticalPosition,
           });

          this.viewContractDetail();
         },err=>{
           if(err.status=='401'){
             this.router.navigate(['/auth/login']);
           }
         });
      }
    });
  }

}
