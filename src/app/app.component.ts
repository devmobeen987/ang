import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogOutComponent } from '../app/component/login-logout/log-out/log-out.component';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   opened =false;
   showdropdown=false;
   username:any = '';
   token:any;
   role:any;
  title = 'angularatendeceproject';
  employee:number = 0;
  constructor( public dialog: MatDialog,private api: AdminService, public router: Router) {
  }
  
  ngOnInit(): void {
    this.api.username.subscribe((name)=>{
      this.username = name;
    });

    this.api.token.subscribe((name)=>{
      this.token = name;
    });
    this.api.role.subscribe((data)=>{
      this.role = data;
    });

     this.api.totalemployee.subscribe((data)=>{
      this.employee = data;
    });

    this.username = localStorage.getItem('name');
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
    console.log(this.token);
    console.log(this.role);

    
  }

  getName(){
    if (this.router.url.includes("profile")) {

      this.api.gettotalempcount().subscribe((data:any)=>{
        this.api.totalemployee.next(data.employee);
   });
     
    } else{
      console.log('djdj');
    }
  
  }

  opendropdown(){
    this.showdropdown=true;
  }

  logout(){
    const dialogref = this.dialog.open(LogOutComponent);
    dialogref.afterClosed().subscribe((result: any) => {
      if (result.event == "no") {
        console.log('nosd');
      }
      if (result.event == "yes") {
        console.log('yeskk');
        this.api.logout().subscribe((data: any) => {
          console.log(data);
          this.api.token.next('');
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("name");
          localStorage.removeItem("compID");
          this.router.navigate(['/auth/login']);
        })
      }
    });
  }
 
}
