import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent,  } from 'ag-grid-community';
import { Subject, takeUntil } from 'rxjs';
import { ExpanseService } from 'src/app/service/expanse.service';
import { AddEditButtonComponent } from '../add-edit-button/add-edit-button.component';
 
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-expanse',
  templateUrl: './view-expanse.component.html',
  styleUrls: ['./view-expanse.component.scss']
})
export class ViewExpanseComponent implements OnInit {

  private ngUnsubscribe = new Subject<void>();
 
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'amount' },
    { field: 'date' },
    { field: 'expense_type.name', headerName: 'Type Name' },
    { field: 'tds' },
    { field: 'discription' },
    { field: 'Action', cellRenderer: AddEditButtonComponent },

  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
  };
  public years: any;
  public type: any;
  public isOption: boolean = false;
  public month: any
  public rowModelType: 'clientSide' | 'infinite' | 'viewport' | 'serverSide' = 'serverSide';

  public Month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public Type: string[] = ['electronic bill', 'domain', 'electricity', 'mobile bill', 'networking'];
  public Years: any[] = [];
  public rowData!: any[];
  private gridApi!: GridApi;
  public filteringdata: any

  constructor(private http: HttpClient, private api: ExpanseService,public router:Router) { }

  ngOnInit(): void {
    const array = [];
    for (let n = 2000; n < 2051; n++) {
      array.push(n);
    }
    this.Years = array;
    this.loadeapi();
  }

  loadeapi() {
    this.api.viewexpanse().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res) => {
      console.log('uhuh', res);
      this.filteringdata = res.data;
      this.rowData = res.data;
    },err=>{
      console.log('dkd',err);
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });
  }

  filter() {
    this.rowData = [];
    let updatemonth = this.month;
    if(updatemonth<10){
      updatemonth = '0'+updatemonth;
    }
    const newarray = this.filteringdata.filter((val:any)=>{
       let typeflag:boolean = false;
       let monthflag:boolean = false;
       let yearflag:boolean = false;
       console.log('dd',this.type);
      //  console.log('dd',val.type);
      if(!!!this.type){
        typeflag = true;
      }else{
        console.log('kd');
        if(!!this.type){
          if(val.type===this.type){
            typeflag = true;
            console.log('kkkkk');
          }else{
            typeflag = false;
          }
        }
        
      }
      //years
     let date =  val.date.split('-');
      //  parseInt(date[0])
      //  parseInt(date[1])
     console.log(typeof date[0],'kmkmk', typeof this.years);
      if(!!!this.years){
        yearflag = true;
      }else{
        if(!!this.years){
          if(parseInt(date[0])===this.years){
            yearflag = true;
          }else{
            yearflag = false;
          }
        }
        
      }
      //month 

      if(!!!this.month){
        monthflag = true;
      }else{
        if(!!this.month){
          if(date[1]==updatemonth){
            monthflag = true;
          }else{
            monthflag = false;
          }
        }
        
      }

      if((monthflag && yearflag && typeflag)){ 
        return val;
        
      }

    })
  //  console.log('jnjnjn',newarray);
   this.rowData = newarray;
    console.log('ff', this.rowData)
    
  }
  Clearfilter(){
    this.rowData = this.filteringdata;
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    console.log('mm',this.gridApi);
  }


  // onGridReady(params: GridReadyEvent) {
  //   this.api.viewexpanse().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res)=>{
  //     console.log('uhuh',res);
  //     this.rowData = res.data;
  //     this.filteringdata = res.data;
  //   var fakeServer = createFakeServer(this.filteringdata);
  //   this.gridApi = params.api;
  //   // create datasource with a reference to the fake server
  //   var datasource = createServerSideDatasource(fakeServer);
  //   console.log('fg',this.gridApi)
  //   // register the datasource with the grid
  //   params.api!.setServerSideDatasource(datasource);
  //   console.log('jiji',params)
  //   });

  // }

}

/**function createFakeServer(allData: any[]) {
  return {
    getData: (request: IServerSideGetRowsRequest) => {
      // take a copy of the data to return to the client
      var requestedRows = allData.slice();
      console.log('mkm',requestedRows);
      return {
        success: true,
        rows: requestedRows,
      };
    },
  };
}


function createServerSideDatasource(server: any): IServerSideDatasource {
  return {
    getRows: (params) => {
      console.log('[Datasource] - rows requested by grid: ', params.request);
      // get data for request from our fake server
      var response = server.getData(params.request);
      console.log(response)
      // simulating real server call with a 500ms delay
      setTimeout(function () {
        if (response.success) {
          // supply rows for requested block to grid
          params.success({ rowData: response.rows });
        } else {
          params.fail();
        }
      }, 500);
    },
  };
}*/