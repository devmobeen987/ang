import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-leave',
  templateUrl: './list-leave.component.html',
  styleUrls: ['./list-leave.component.scss']
})
export class ListLeaveComponent implements OnInit {
public leavelistdata:any = [];
public headercolumn: string[] = [
  'day',
  'fromdate',
  'todate',
  'reason',
  'status'];
  constructor(private api:AdminService,  public dialog: MatDialog,public router:Router) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
  this. loadeListApi();
  }

  loadeListApi(){
    let val: any = [];
    this.api.listLeave().subscribe((data:any)=>{
      data.forEach((element: any) => {
        val.push(element);
      });
      this.leavelistdata = new MatTableDataSource(val);
      this.leavelistdata.paginator = this.paginator;
      this.leavelistdata.sort = this.sort;
    },err=>{
      console.log('dkd',err);
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });
  }

}
