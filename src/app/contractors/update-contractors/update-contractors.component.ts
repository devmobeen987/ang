import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AddContractorApi, singalContractorApi } from 'src/app/model/contractor.model';
import { ContractorService } from 'src/app/service/contractor.service';
import { SnackBarService } from 'src/app/service/snackBar.service';

@Component({
  selector: 'app-update-contractors',
  templateUrl: './update-contractors.component.html',
  styleUrls: ['./update-contractors.component.scss']
})
export class UpdateContractorsComponent implements OnInit {

  public edit_contractor_form = this.fb.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    join_date:[''],
    type:[''],
    address:[''],
    status:[''],
  });

  public id:any
  private ngUnsubscribe = new Subject<void>();

  constructor(public fb:FormBuilder,
    private api:ContractorService, 
    public router: Router,
    private _snackBar: SnackBarService,
    public route:ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data:any)=>{
        this.id = data.id;
        console.log('sjkk',this.id);
      });

      this.getsingalapiData();

    }

    getsingalapiData(){
      this.api.singalContractor(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:singalContractorApi)=>{
        // console.log('djjdf',e.data);
        this.edit_contractor_form.patchValue({
          firstname:e.data.firstname,
          lastname:e.data.lastname,
          email:e.data.email,
          join_date:e.data.join_date,
          type:e.data.type,
          address:e.data.address,
          status:e.data.status,
        });
      })
    }
  
  Update(){
    const date = this.edit_contractor_form.value;
    const d = new Date(date.join_date);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const req= {
      firstname:this.edit_contractor_form.value.firstname,
      lastname:this.edit_contractor_form.value.lastname,
      email:this.edit_contractor_form.value.email,
      join_date:data,
      status:this.edit_contractor_form.value.status,
      type:this.edit_contractor_form.value.type,
      address:this.edit_contractor_form.value.address,
    }
    this.api.updateContractor(req,this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:AddContractorApi)=>{
       this._snackBar.toster(e.msg);
       setTimeout(() => {
        this.router.navigate(['/contractor/view']);
      }, 2000);
      // this._snackBar.open(e.msg,'',
      //     {
      //       duration: this.durationInSeconds * 1000,
      //       horizontalPosition: this.horizontalPosition,
      //       verticalPosition: this.verticalPosition,
      //     });
         
    });


  }
}
