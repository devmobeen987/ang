import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/service/admin.service';
import { Clientlist } from 'src/app/model/client.model';
import { findIndex, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
 
  public employeedata: any = {};
  public clientData = new MatTableDataSource<any[]>([]);
  public id: any
  public isShow: boolean = false;
  public isAutocomple: boolean = false
  public autocompletevalue:any = null;
  public searchData:any;
  public add:any;
  public row1: any[] = [];
  public row2: any[] = [];
  public headercolumn: string[] = [
    'id',
    'name',
    'email',
    'country',
    'startdate',
    'enddate',
    'tecnology',
    'status',
    'Action'];
  constructor(private api: AdminService, public dialog: MatDialog, public router:Router) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
   this.loadApiData();
   this.api.videoemit.subscribe((res:any)=>{
     this.row1.push(res);
   },err=>{
    if(err.status=='401'){
      this.router.navigate(['/auth/login']);
    }
   })
  //  this.getinputdata();
  }

  loadApiData(){
    let val:any = []
    this.api.viewClient().pipe(map((e:any)=> e.data)).subscribe((req:any)=>{
      // console.log(req);
      req.map((e:any)=>{
        e.name = e.firstname+' '+e.lastname;
        return e;
      });
      // console.log('lllll',req);
      this.searchData = req;
      this.clientData = new MatTableDataSource(req);
      this.clientData.paginator = this.paginator;
      this.clientData.sort = this.sort;
      console.log(this.clientData);
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
  }

  showoption(){
    this.isAutocomple = true;
    // console.log('dfgh',this.autocompletevalue);
    if(this.autocompletevalue==null){
      let data:any[] = [];
      console.log(this.searchData);
      this.searchData.forEach((e:any)=>{
        data.push({name:e.name});
      })
      this.clientnameList = data;
      console.log(this.clientnameList);
    }else{
      
    }
  }

  clientnameList:any[]=[];
  getinputdata(){
    let data:any[] = [];
    this.searchData.forEach((e:any)=>{
      data.push({name:e.name});
    })
    this.clientnameList = data;
   const result =  this.clientnameList.filter((val: any) =>
    val.name.toLocaleLowerCase().indexOf(this.autocompletevalue) !== -1);
    this.clientnameList = result;
    // console.log('dd',this.clientnameList) 
  
  }

  setinputdata(i:any){
    // this.clientnameList
      this.autocompletevalue =  this.clientnameList[i].name;
      // console.log('lllll',this.searchData);
      this.searchData 
      let val:any = [];
      if(this.autocompletevalue==this.searchData[i].name){
           val.push(this.searchData[i]);
          //  console.log(val);
           this.clientData = new MatTableDataSource(val);
      }
      if(this.autocompletevalue==null){
        console.log('ddd',this.autocompletevalue);
        this.clientData = new MatTableDataSource(this.searchData);
      }
      
  }
  
  delayoutfocus(){
    setTimeout(() => {
      this.isAutocomple = false;
    }, 500);
  }


  addvideo(){
    console.log(this.add)
    this.api.videoemit.next(this.add);
    // this.row1.push(this.add);
  }
  subcribe(){
    this.api.videoemit.subscribe((res:any)=>{
      this.row2.push(res);
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    })
  }
}


