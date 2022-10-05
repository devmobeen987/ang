import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
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

  // snack bar start
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  //end
  
  constructor(private fb:FormBuilder,
     public apiservice:AdminService, 
     public router: Router,
     public route:ActivatedRoute,
     private _snackBar: MatSnackBar
     ) { }

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
    },
    err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
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
         this._snackBar.open('Data Is Updated successfully','',
         {
           duration: this.durationInSeconds * 1000,
           horizontalPosition: this.horizontalPosition,
           verticalPosition: this.verticalPosition,
         });
         setTimeout(() => {
          this.router.navigate(['/profile']);
         }, 2000);
        //  alert('Data Is Updated');
        //  this.router.navigate(['/profile']);
    
       },
       err=>{
        if(err.status=='401'){
          this.router.navigate(['/auth/login']);
        }
      })
    }else{
        this.valid = true;
    }
    

  }
}
