import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { User } from '../../model/admin.model';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})

export class AdminProfileComponent implements OnInit {

  public userdata:User={};
  public role:any;
  constructor(private apiservice:AdminService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    console.log('fff/',this.role);
    this.Loadsingaluserdata();
    
  }

  Loadsingaluserdata(){
    const token = localStorage.getItem('token');
    this.apiservice.loginUserdata(token).subscribe((data:any)=>{
      console.log(data);    
      this.userdata = data.success;
      localStorage.setItem('name',data.success.name);
      this.apiservice.username.next(data.success.name);
      this.apiservice.role.next(data.success.role);
    })
  }

}
