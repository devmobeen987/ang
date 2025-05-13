import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js'; 
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import { ExpanseService } from 'src/app/service/expanse.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-income-dashbord',
  templateUrl: './income-dashbord.component.html',
  styleUrls: ['./income-dashbord.component.scss']
})
export class IncomeDashbordComponent implements OnInit {
//  public url = "http://127.0.0.1:8000/api";
 //public url = "https://imaclowd.com/atendenceproject/api";
 url = environment.apiURL;
 currentYear:number = new Date().getFullYear();
 currentMonth:number = new Date().getMonth();
 month:any[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: '',
      },
    ],
    labels: [ "January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December" ]
  };
 // start

  public fullMonthName:any[] = [];
  public expanseAmount:any[] = [];
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'gray',
        },
        ticks: {
          color: 'blue'
        }
      }
    },

  };

  public lineChartType: ChartType = 'line';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  // end
  private ngUnsubscribe = new Subject<void>();
  monthname:string = '';
  constructor(private api:ExpanseService,
     private servies:AdminService,
     private http: HttpClient,
     public router:Router,
     private _snackBar: MatSnackBar) { 
       this.monthname = this.month[this.currentMonth];
     }

  ngOnInit(): void {
    console.log(this.currentMonth);
   this.loadeapi();
  }

  loadeapi(){
      let datasets1:any[] = [];
      const token = localStorage.getItem('token');
      // console.log('sks/////////',token);
      const headers_object = new HttpHeaders({ 
          'Authorization': "Bearer " + token
      });
      const httpOptions = {
        headers: headers_object
      }

      const parllelApi = [];
      const req = {
        'year':this.currentYear,
        'month':this.currentMonth+1,
        'is_month':this.isShowMonth
      }
      
      const data1 = this.http.post<any>(this.url+'/expanse/totalexpansedashbord',req,httpOptions);
      const data2 = this.http.post<any>(this.url+'/income/totaldashbord',req,httpOptions);
      let monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];  
      parllelApi.push(data1);
      parllelApi.push(data2);
      console.log('jjj',parllelApi);
      // return;
      forkJoin(parllelApi).subscribe((req:any) => {
          console.log('jk',req);
          const res = req[0].data
          const res2 = req[1].data
          res.forEach((e:any) => {
            console.log(e.date);
            let d:any = new Date(e.date);
            this.fullMonthName.push( monthNames[d.getMonth()]);
            this.expanseAmount.push(e.amount);
          });

          datasets1.push({
            data:this.expanseAmount,
            label:'Expanse'
          });
          let fullMonthName:any = [];
          let incometotal:any = [];
          res2.forEach((e:any) => {
            let d:any = new Date(e.date);
            fullMonthName.push( monthNames[d.getMonth()]);
            incometotal.push(e.amount);
          });

          datasets1.push({
            data:incometotal,
            label:'Income'
          });
        this.lineChartData.datasets = datasets1;
        this.chart?.update();
        // this.lineChartData.labels = fullMonthName; 
        console.log('iji',this.lineChartData);
        // console.log('sd',)
      },
      (err)=>{
        console.log('dkd',err);
            if(err.status=='401'){
              this.router.navigate(['/auth/login']);
            }
            if(err.status=='400'){
              this._snackBar.open('somthing is wrong','',
              {
                duration: this.durationInSeconds * 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
              });
              setTimeout(() => {
              }, 2000);
            }
      });


  }

  // loadeincum(){
  //   let fullMonthName:any = [];
  //   let incometotal:any = [];
  //   let monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  //   this.servies.clientIncomeTotal().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:any)=>{
  //     // console.log('iii',res.data);
  //     res.data.forEach((e:any) => {
  //       // console.log(e.date);
  //       let d:any = new Date(e.startdate);
  //       fullMonthName.push( monthNames[d.getMonth()]);
  //       incometotal.push(e.amount);
  //     });

  //     this.lineChartData.datasets.push({
  //         data:incometotal,
  //         label:'Income'
  //     })
  //     this.lineChartData.labels = fullMonthName; 
  //     console.log(this.lineChartData);

  //     // this.lineChartData ={
  //     //   datasets: [{
  //     //     data:incometotal,
  //     //     label:'Income'
  //     //   }],
  //     //   labels: fullMonthName
  //     // };

  //   })
  // }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  previous(){
    if(this.isShowMonth){
      this.currentMonth = this.currentMonth-1;
      this.monthname = this.month[this.currentMonth];
      this.loadeapi();
    }else{
      this.currentYear = this.currentYear-1;
      this.loadeapi();
    }

  }
  next(){
    if(this.isShowMonth){
      this.currentMonth = this.currentMonth+1;
      this.monthname = this.month[this.currentMonth];
      this.loadeapi();

    }else{
      this.currentYear = this.currentYear+1;
      this.loadeapi();
    }

  }
  isShowMonth:boolean = false;
  fetchdetail(e:string){
    if(e=='month'){
      this.isShowMonth = true;
      this.loadeapi();
    }else{
      this.loadeapi();
      this.isShowMonth = false;
    }
  }

}
