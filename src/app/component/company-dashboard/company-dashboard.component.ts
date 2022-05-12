import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AdminService } from 'src/app/service/admin.service';
import { employeeTotalcount } from '../../model/employee.model';
import { EmployeeJoinTotal } from '../../model/employee.model';
import { totalemployee } from '../../model/employee.model';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  public employeeVal:any = {}

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };

  public barChartData:any = {
    labels: [  ],
    datasets: [
      { data: [  ], label: '' },
     
    ]
  };

  public barChartType: ChartType = 'bar';
  constructor(private api:AdminService) { }

  ngOnInit(): void {
    let val= {}
    this.api.gettotalcount().subscribe((data:totalemployee)=>{
      // console.log('ss',data);
        val = {
          employee:data.employee,
          leaves:data.leave[1]?data.leave[1].total:0,
          active:data.active[0]?data.active[0].total:0
          }
        this.employeeVal = val;
        console.log('ddd',this.employeeVal);
    });
    this. onloadebarApi();
  }

  onloadebarApi(){

    let  date:string[] = [];
    let  count:number[] = [];
      this.api.gettotalempEntrycount().subscribe((data: employeeTotalcount) => {
       
        data.employee.forEach((element:EmployeeJoinTotal) => {
          date.push(element.date);
          count.push(element.total);
        });
        this.barChartData ={
          labels: date,
          datasets: [
            { data:count , label: 'Total Employee Joining' },
          
          ]
        };
        // console.log('sd',this.barChartData);
    });
  }

}
