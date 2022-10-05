import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js'; 
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import { ExpanseService } from 'src/app/service/expanse.service';
@Component({
  selector: 'app-income-dashbord',
  templateUrl: './income-dashbord.component.html',
  styleUrls: ['./income-dashbord.component.scss']
})
export class IncomeDashbordComponent implements OnInit {
 public url = "http://127.0.0.1:8000/api";
 //public url = "https://imaclowd.com/atendenceproject/api";

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

  constructor(private api:ExpanseService,
     private servies:AdminService,
     private http: HttpClient,
     public router:Router,
     private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
      const data1 = this.http.get<any>(this.url+'/expanse/totalexpansedashbord',httpOptions);
      const data2 = this.http.get<any>(this.url+'/income/totaldashbord',httpOptions);
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

}
