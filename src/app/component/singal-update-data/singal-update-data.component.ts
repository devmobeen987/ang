import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-singal-update-data',
  templateUrl: './singal-update-data.component.html',
  styleUrls: ['./singal-update-data.component.css']
})
export class SingalUpdateDataComponent implements OnInit {

  public id:any;
  public employeeData:any ={};
  constructor(public router: Router,public route:ActivatedRoute,  public api:AdminService, ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
       console.log('hbhb',this.id);
     });

     this.api.singalupdate(this.id).subscribe((data:any)=>{
           console.log(data);
           this.employeeData = data[0];
     });

  }

}
