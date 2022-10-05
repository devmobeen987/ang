import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AddContractorApi } from 'src/app/model/contractor.model';
import { ContractorService } from 'src/app/service/contractor.service';
import { SnackBarService } from 'src/app/service/snackBar.service';

@Component({
  selector: 'app-add-contractors',
  templateUrl: './add-contractors.component.html',
  styleUrls: ['./add-contractors.component.scss']
})
export class AddContractorsComponent implements OnInit {
  public add_contractor_form = this.fb.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    join_date:[''],
    type:[''],
    address:[''],
    status:[''],
  });

  private ngUnsubscribe = new Subject<void>();
  constructor(public fb:FormBuilder,
    private api:ContractorService, 
    public router: Router,
    private _snackBar: SnackBarService,
    public route:ActivatedRoute) { }
    
  ngOnInit(): void {
  }

  submit(){
    const datevalue = this.add_contractor_form.value;
    const d = new Date(datevalue.join_date);
    const date = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const paylode = {
      firstname: this.add_contractor_form.value.firstname,
      lastname: this.add_contractor_form.value.lastname,
      email: this.add_contractor_form.value.email,
      status:this.add_contractor_form.value.status,
      type:this.add_contractor_form.value.type,
      address:this.add_contractor_form.value.address,
      join_date:date,
    }
    // console.log('dddd',date);
    console.log('jfjjf',paylode);
    this.api.addContractor(paylode).pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:AddContractorApi)=>{
     console.log(e);
     this._snackBar.toster(e.msg);
      setTimeout(() => {
        this.router.navigate(['/contractor/view']);
       }, 2000);
    //  this._snackBar.open(e.msg,'',
    //   {
    //     duration: this.durationInSeconds * 1000,
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
     
    });

  }
}
