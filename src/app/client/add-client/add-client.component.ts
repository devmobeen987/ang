import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {AddClientapi} from 'src/app/model/client.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  public add_client_form = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required],
    country:['',Validators.required],
    tecnology:['',Validators.required],
    status:['',Validators.required],
    startdate:['',Validators.required],
    endDate:[''],
  })
  selectedFile:any = null;
  constructor(private fb:FormBuilder,
    public api:AdminService,
    public router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  submit(){
    console.log(this.add_client_form.value);
    if(this.add_client_form.valid){

    }else{
      this._snackBar.open('Input field is blank','',
      {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    const date = this.add_client_form.value;
    const d = new Date(date.startdate);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const d1 = new Date(date.endDate);
    const data1 = d1.getFullYear()+"-"+ ("0"+(d1.getMonth()+1)).slice(-2) +"-"+("0" + d1.getDate()).slice(-2);
    let tecnology = '';
     this.add_client_form.value.tecnology.forEach((val:any) => {
        // console.log(val);
        tecnology = tecnology+" "+val;
      });
      console.log(tecnology);
      const paylode = {
        firstname: this.add_client_form.value.firstname,
        lastname: this.add_client_form.value.lastname,
        email: this.add_client_form.value.email,
        country: this.add_client_form.value.country,
        tecnology: tecnology,
        status: this.add_client_form.value.status,
        startdate:data,
        enddate:data1,
      }
    console.log(paylode);
    // return;
    this.api.addClient(paylode).subscribe((data:any)=>{
      console.log(data);
      // alert(data.msg);
      this._snackBar.open(data.msg,'',
      {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      setTimeout(() => {
        this.router.navigate(['client/list']);
      }, 2000);
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    })
    
  }

}
