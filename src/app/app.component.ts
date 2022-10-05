import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,  Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LogOutComponent } from '../app/component/login-logout/log-out/log-out.component';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   opened =false;
   showdropdown=false;
   username:any = '';
   isLogin:any;
   role:any;
   title = 'angularatendeceproject';
   employee:number = 0;
  
  constructor( public dialog: MatDialog,private api: AdminService, private router: Router, private route: ActivatedRoute,) {
    
    
  }
  
  ngOnInit(): void {
    this.username = localStorage.getItem('name');
    this.isLogin = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
    
    if(this.isLogin){
     this.router.navigate(['profile']);
    }else{
      this.router.navigate(['auth/login']);
    }


    this.api.username.subscribe((name)=>{
      this.username = name;
    });

    this.api.token.subscribe((name)=>{
      this.isLogin = name;
    });
    this.api.role.subscribe((data)=>{
      this.role = data;
    });

     this.api.totalemployee.subscribe((data)=>{
      this.employee = data;
    });

  }
 

  // getName(){
  //   if (this.router.url.includes("profile")){
  //     if(this.role=='company'){
  //         this.api.gettotalempcount().subscribe((data:any)=>{
  //           this.api.totalemployee.next(data.employee);
  //         },
  //         err=>{
  //           console.log('dkd',err);
  //           if(err.status=='401'){
  //             this.router.navigate(['/auth/login']);
  //           }
  //         });
  //     }
  //   } else {
  //     console.log('djdj');
  //   }
  
  // }

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
        },
        err=>{ 
          console.log('dkd',err);
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
        });
      }
    });
  }
 
}
