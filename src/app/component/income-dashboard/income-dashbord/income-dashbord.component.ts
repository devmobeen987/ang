import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  // end
  private ngUnsubscribe = new Subject<void>();

  constructor(private api:ExpanseService, private servies:AdminService,private http: HttpClient,public router:Router) { }

  ngOnInit(): void {
   this.loadeapi();
  //  this.loadeincum();
  }

  loadeapi(){
      let datasets1:any[] = [];
      const token = localStorage.getItem('token');
      const headers_object = new HttpHeaders({ 
          'Authorization': "Bearer " + token
      });
      const httpOptions = {
        headers: headers_object
      }
      const data1 = this.http.get<any>(this.url+'/expanse/totalexpansedashbord',httpOptions);
      const data2 = this.http.get<any>(this.url+'/income/totaldashbord',httpOptions);
      let monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];  
      forkJoin([data1, data2]).subscribe((req:any) => {
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

          // let amountset:any = {
          //   data:this.expanseAmount,
          //   label:'Expanse'
          // };
          // this.lineChartData ={
          //   datasets: [amountset],
          //   labels: this.fullMonthName
          // };


          let fullMonthName:any = [];
          let incometotal:any = [];
          res2.forEach((e:any) => {
            // console.log(e.date);
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
      err=>{
        console.log('dkd',err);
            if(err.status=='401'){
              this.router.navigate(['/auth/login']);
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
