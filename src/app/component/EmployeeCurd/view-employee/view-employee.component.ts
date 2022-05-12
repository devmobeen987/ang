import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

export class ViewEmployeeComponent implements OnInit {

  public employeedata: any = {};
  public emploayeesentrydata = new MatTableDataSource<any[]>([]);
  public id: any
  public isShow: boolean = false;
  public headercolumn: string[] = [
    'id',
    'firstname',
    'lastname',
    'username',
    'email',
    'experience',
    'employeetype',
    'status',
    'address',
    'photo',
    'Action'];
  constructor(private api: AdminService,
    public dialog: MatDialog,
  ) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.onloadeApi();

  }

  onloadeApi() {
    let val: any = []
    this.api.getAllEmployee().subscribe((data: any) => {
      data.forEach((element: any) => {
        val.push(element);
      });
      this.emploayeesentrydata = new MatTableDataSource(val);
      // this.emploayeesentrydata = val;
      this.emploayeesentrydata.paginator = this.paginator;
      this.emploayeesentrydata.sort = this.sort;
      console.log(this.emploayeesentrydata);
    });
  }


  delete(id: any) {
    const dialogref = this.dialog.open(DeleteEmployeeComponent);
    dialogref.afterClosed().subscribe((result: any) => {
      if (result.event == "no") {
        console.log('nosd');
      }
      if (result.event == "yes") {
        console.log('yeskk');
        this.api.deleteEmployee(id).subscribe((data: any) => {
          console.log(data);
          this.onloadeApi();
        })
      }
    });

  }

  // ngAfterViewInit(): void {
  //   this.emploayeesentrydata.sort = this.sort;
  // }


}
