import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  public salary_form = this.fb.group({
    year:[''],
    month:[''],
  });

  public Month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public Years:any = [];
  constructor(private api: PaymentService, public fb:FormBuilder) { }

  ngOnInit(): void {
    const array = [];
    for (let n = 2000; n < 2051; n++) {
      array.push(n);
    }
    this.Years = array;
   
  }

  calculate(){
    console.log(this.salary_form.value);
    this.api.viewsalary(this.salary_form.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:any)=>{
      console.log('djjkd',e.data);
  });
  }

}
