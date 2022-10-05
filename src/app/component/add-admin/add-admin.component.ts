import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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
  });
  // snack bar start
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  //end

  constructor(private fb:FormBuilder,
   public apiservice:AdminService,
   public router: Router,
   private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  submit(){
    console.log(this.add_admin_form.value);
    this.apiservice.addUser(this.add_admin_form.value).subscribe((data:any)=>{
         localStorage.setItem('userName',data.success.name);
         localStorage.setItem('token',data.success.token);
         localStorage.setItem('type',data.success.type);
         this._snackBar.open('added successfully','',
         {
           duration: this.durationInSeconds * 1000,
           horizontalPosition: this.horizontalPosition,
           verticalPosition: this.verticalPosition,
         });
         setTimeout(() => {
          this.router.navigate(['/profile']);
         }, 2000);
         
        //  alert(' added successfully');
         
         console.log(data);
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
