import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-employee-dashbord',
  templateUrl: './employee-dashbord.component.html',
  styleUrls: ['./employee-dashbord.component.css']
})
export class EmployeeDashbordComponent implements OnInit {

  public totaldays:number = 0;
  public approvedDays:number = 0;
  public UnapprovedDays:number = 0;
  constructor(private api:AdminService,) { }

  ngOnInit(): void {
    this.OnloadeApi();
  }

  OnloadeApi(){
    this.totaldays = 0;
    this.approvedDays = 0;
    this.UnapprovedDays = 0;
    this.api.listLeave().subscribe((data:any)=>{
      data.forEach((element: any) => {
        console.log(element);
        this.totaldays=this.totaldays+element.days
        if(element.status=="UnApproved"){
          this.UnapprovedDays = this.UnapprovedDays+element.days
        }if(element.status=="Approved"){
          this.approvedDays = this.approvedDays+element.days
        }
      });
      console.log(this.UnapprovedDays);
      console.log(this.approvedDays);

      console.log(this.totaldays);
    });
  }
}
