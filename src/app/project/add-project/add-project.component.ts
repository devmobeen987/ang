import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { Clientlist } from 'src/app/model/client.model';
import { AdminService } from 'src/app/service/admin.service';
import {Clientlist}from '../../model/client.model';
import {clientlistApireq}from '../../model/client.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public add_project_form = this.fb.group({
    projectname:[''],
    clientID:[''],
    startdate:[''],
    enddate:[''],
    status:[''],
  });
  public clientName:Clientlist[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  constructor(private fb:FormBuilder,
     public api:AdminService,
      public router: Router,
      private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.loadeApi();

  }
  loadeApi(){
    this.api.viewClientlist().subscribe((data:clientlistApireq)=>{
      console.log(data.success);
      this.clientName = data.success;
    },
    err=>{
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });
  }

  submit(){
    const date = this.add_project_form.value;
    const d = new Date(date.startdate);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const d1 = new Date(date.enddate);
    const data1 = d1.getFullYear()+"-"+ ("0"+(d1.getMonth()+1)).slice(-2) +"-"+("0" + d1.getDate()).slice(-2);

    const paylode = {
      projectname: this.add_project_form.value.projectname,
      clientID: this.add_project_form.value.clientID,
      status: this.add_project_form.value.status,
      startdate:data,
      enddate:data1,
    }
    console.log(paylode);
    // return
    this.api.addProject(paylode).subscribe((data:any)=>{
      // alert(data.msg);
      this._snackBar.open(data.msg,'',
      {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      setTimeout(() => {
        this.router.navigate(['/contractor']);
      }, 2000);

    },err=>{
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });
  }
}
