import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/service/admin.service';
import { Clientlist } from 'src/app/model/client.model';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
 
  public employeedata: any = {};
  public clientData = new MatTableDataSource<any[]>([]);
  public id: any
  public isShow: boolean = false;
  public headercolumn: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'country',
    'startdate',
    'enddate',
    'tecnology',
    'status',
    'Action'];
  constructor(private api: AdminService, public dialog: MatDialog) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
   this.loadApiData();
  }

  loadApiData(){
    let val:any = []
    this.api.viewClient().subscribe((data:any)=>{
      console.log(data);
      data.data.forEach((element: Clientlist) => {
        val.push(element);
      });

      this.clientData = new MatTableDataSource(val);
      this.clientData.paginator = this.paginator;
      this.clientData.sort = this.sort;
      console.log(this.clientData);
    });
  }

  

}
