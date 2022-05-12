import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-view-update-list',
  templateUrl: './view-update-list.component.html',
  styleUrls: ['./view-update-list.component.css']
})
export class ViewUpdateListComponent implements OnInit {
  @Input() item:any;
  // @Output() newItemEvent = new EventEmitter<string>();
  public role:any;
  public headercolumn: string[] = [];
  public workupdate:any = new MatTableDataSource<any[]>([]);
  
    constructor(private api:AdminService) { }
  
  
    @ViewChild('Paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
  
    ngOnInit(): void {
      console.log('kkk',this.item);
      this.headercolumn = this.item;
      this.role = localStorage.getItem('role');
      if(this.role=='company'){
          this. companylist();
      }
      if(this.role=='employee'){
         this.employeelist();
      }
    }
  
  
    employeelist(){
      const val:any = [];
      this.api.empworkUpdatelist().subscribe((data:any)=>{
        console.log(data);
        data.forEach((element: any) => {
          val.push(element);
        });
  
        this.workupdate = new MatTableDataSource(val);
        this.workupdate.paginator = this.paginator;
        this.workupdate.sort = this.sort;
        console.log(this.workupdate);
      });
    }
    
    companylist(){
      const val: any = [];
      this.api.copmworkUpdatelist().subscribe((data:any)=>{
        console.log(data);
        data.forEach((element: any) => {
          val.push(element);
        });
        this.workupdate = new MatTableDataSource(val);
        this.workupdate.paginator = this.paginator;
        this.workupdate.sort = this.sort;
        console.log(this.workupdate);
      });
    }

   

}
