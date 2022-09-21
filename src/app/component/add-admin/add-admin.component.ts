import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  public add_admin_form = this.fb.group({
    name:[''],
    email:[''],
    username:[''],
    address:[''],
    password:[''],
    c_password:[''],
  })

  constructor(private fb:FormBuilder, public apiservice:AdminService, public router: Router) { }

  ngOnInit(): void {
    
  }

  submit(){
    console.log(this.add_admin_form.value);
    this.apiservice.addUser(this.add_admin_form.value).subscribe((data:any)=>{
         localStorage.setItem('userName',data.success.name);
         localStorage.setItem('token',data.success.token);
         localStorage.setItem('type',data.success.type);
         alert(' added successfully');
         this.router.navigate(['/profile']);
         console.log(data);
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
