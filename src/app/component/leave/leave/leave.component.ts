import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
public displayedColumns: string[] = [
  'empname',
  'fromdate',
  'todate',
  'reason',
  'status',
  'action'];
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
public employeeLeavedata: any = new MatTableDataSource<any[]>([]);
  constructor(private api:AdminService,) { }
  
  ngOnInit(): void {
    this.onloadeApi();
  }

onloadeApi()
{
  let val: any = [];
 this.api.EmployeesLeavelist().subscribe((data:any)=>{
   console.log(data);
   data.forEach((element: any) => {
    val.push(element);
  });
    this.employeeLeavedata = data
    this.employeeLeavedata = new MatTableDataSource(val);
    this.employeeLeavedata.paginator = this.paginator;
    this.employeeLeavedata.sort = this.sort;
      console.log(this.employeeLeavedata);
 })  

}

approve(id:any) {
  console.log('ddd',id);
    this.api.EmployeesLeaveApprove(id).subscribe((data:any)=>{
      alert(data.msg);
      window.location.reload();
    console.log(data);
    });
 
}

UnApproved(id:any){
  console.log('ddd',id);
  this.api.EmployeesLeaveUnApprove(id).subscribe((data:any)=>{
    alert(data.msg);
    window.location.reload();
  console.log(data);
  });
}

}



