import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public login_form = this.fb.group({
    email:[''],
    password:['']
  })

  constructor(private fb:FormBuilder, private apiservice:AdminService, public router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.apiservice.loginUser(this.login_form.value).subscribe((data:any)=>{
      console.log(data)
      this.apiservice.username.next(data.success.name);
      this.apiservice.token.next(data.success.token);
      this.apiservice.role.next(data.success.role);
      
      localStorage.setItem('token',data.success.token);
      localStorage.setItem('role',data.success.role);
      localStorage.setItem('name',data.success.name);
      localStorage.setItem('compID',data.success.companyID);
      this.router.navigate(['/profile']);
    });

  }

}
