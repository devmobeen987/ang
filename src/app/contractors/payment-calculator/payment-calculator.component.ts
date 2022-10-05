import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import { ContractorService } from 'src/app/service/contractor.service';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss']
})
export class PaymentCalculatorComponent implements OnInit {
  public add_payment_form = this.fb.group({
    contractor:[''],
    client:[''],
    percentage:[''],
    type:[''],
    add_paymentData:this.fb.array([])
  });
  public contractorData:any[] = [];
  public clientData:any[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  private ngUnsubscribe = new Subject<void>();
  constructor(public fb:FormBuilder,
    private api:ContractorService, 
    private Api:AdminService, 
    public router: Router,
    private _snackBar: MatSnackBar,
    public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadecontractorApi();
    this.loadeClientApi();
  }

  loadecontractorApi(){
    this.api.viewContractor().pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:any)=>{
      this.contractorData = e.data;
      // let data:any = [];
      // e.data.forEach((e:any)=>{
      //   data.push({
      //     name:e.firstname+e.lastname,
      //   })
      // })
      // this.contractorData = data;
      console.log('dd',this.contractorData);
    })
  }

  loadeClientApi(){
    this.Api.viewClient().pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:any)=>{
      // console.log('dkkd',e.data);
      this.clientData = e.data;
      // let data:any = [];
      // e.data.forEach((e:any)=>{
      //   data.push({
      //     name:e.firstname+e.lastname,
      //   })
      // })
      // this.clientData = data;
      // console.log('ddddd',this.clientData);
    })
  }

  paymentFormData() : FormArray {  
    // return this.add_payment_form.get("add_paymentData") as FormArray  
    return this.add_payment_form.controls["add_paymentData"] as FormArray  
  }  

  newpaymentField(): FormGroup {  
    return this.fb.group({  
      contractor:[''],
      client:[''],
      percentage:[''],
      type:[''], 
    })  
  } 
 
  addpayment(){
    this.paymentFormData().push(this.newpaymentField());
  }

  removepayment(i:number) {  
    this.paymentFormData().removeAt(i);  
  } 
  submit(){

  }

}
