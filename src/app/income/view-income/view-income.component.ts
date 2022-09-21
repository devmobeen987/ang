import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { incomeApi, incomeList } from 'src/app/model/income.model';

import { AdminService } from 'src/app/service/admin.service';
import { ViewClientIncomeComponent } from '../view-client-income/view-client-income.component';

@Component({
  selector: 'app-view-income',
  templateUrl: './view-income.component.html',
  styleUrls: ['./view-income.component.scss']
})
export class ViewIncomeComponent implements OnInit {

  public Incomedata = new MatTableDataSource<any[]>([]);
  public loading:boolean = false;
  public headercolumn: string[] = [
    'id',
    'totalincome',
    'startdate',
    'enddate',
    'discription',
    'tds',
    'Action'];
  constructor(private api: AdminService, public dialog: MatDialog, public router:Router,) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit(): void {
    this.loadApiData();
  }

  loadApiData(){
    let val:any = [];
    this.api.viewincome().subscribe((data:incomeApi)=>{
      data.data.forEach((element:incomeList) => {
        val.push(element);
      });
      this.Incomedata = new MatTableDataSource(val);
      this.Incomedata.paginator = this.paginator;
      this.Incomedata.sort = this.sort;
    },err=>{
      console.log('dkd',err);
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });
  }

  viewClientIncome(id:any,start:any,end:any,dis:any){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    const dialogref = this.dialog.open(ViewClientIncomeComponent,{
      data: {
        rowID: id,
        startdate: start,
        enddate:end,
        discription:dis
      }
    });
    dialogref.afterClosed().subscribe((res:any)=>{
      if (res.event == "no") {
        console.log('nosd');
      }
    });
  }
 
}
