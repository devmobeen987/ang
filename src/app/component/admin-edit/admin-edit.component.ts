import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  public edit_admin_form = this.fb.group({
    name:[''],
    email:[''],
    username:[''],
    address:[''],
    password:['',Validators.required],
    c_password:['',Validators.required],
    });

  public id:any;
  public valid:boolean = false;
  constructor(private fb:FormBuilder,
     public apiservice:AdminService, 
     public router: Router,
     public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
       console.log( this.id);
     });
     this.loadediteddata();
  }

  loadediteddata(){
    const token = localStorage.getItem('token');
    this.apiservice.loginUserdata(token).subscribe((element:any)=>{
      console.log(element);  
      this.edit_admin_form.patchValue({
        name:element.success.name,
       email:element.success.email,
       address:element.success.address,
       username:element.success.username,
      })  
    })
    // this.apiservice.getsingalUsersdata().subscribe((element:any)=>{
    //   console.log('ghh',element.success);
      
      
    //  });

  }
  save(){
    if(this.edit_admin_form.value.password == this.edit_admin_form.value.c_password ){
      const sendingdata = {
        'name':this.edit_admin_form.value.name,
        'email':this.edit_admin_form.value.email,
        'address':this.edit_admin_form.value.address,
        'username':this.edit_admin_form.value.username,
        'password':this.edit_admin_form.value.password,
       };
       this.apiservice.updateUserdata(this.id,sendingdata).subscribe((data:{})=>{
         console.log(data);
         alert('Data Is Updated');
         this.router.navigate(['/profile']);
    
       })
    }else{
        this.valid = true;
    }
    

  }
}
