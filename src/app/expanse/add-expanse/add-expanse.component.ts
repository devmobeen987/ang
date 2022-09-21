import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ExpanseService } from 'src/app/service/expanse.service';

@Component({
  selector: 'app-add-expanse',
  templateUrl: './add-expanse.component.html',
  styleUrls: ['./add-expanse.component.scss']
})
export class AddExpanseComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
 public add_expanse_form = this.fb.group({
  discription:[''],
  amount:[''],
  date:[''],
  type:[''],
  tds:['']
});
constructor(
  private fb:FormBuilder,
  public api:ExpanseService,
  public router: Router,
  public dialog: MatDialog,
  private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  submit(){
    const date = this.add_expanse_form.value;
    const d = new Date(date.date);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const paylode = {
      amount: this.add_expanse_form.value.amount,
      discription: this.add_expanse_form.value.discription,
      type: this.add_expanse_form.value.type,
      date:data,
      tds:this.add_expanse_form.value.tds,

    }
    console.log(paylode);
    this.api.addExpanse(paylode).pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:any)=>{
      // console.log(res.msg);
      this._snackBar.open(res.msg,'',
      {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      setTimeout(() => {
        this.router.navigate(['expanse/list']);
      }, 2000);
    },
    err=>{
      console.log('dkd',err);
          if(err.status=='401'){
            this.router.navigate(['/auth/login']);
          }
    });

  }

  validnumber:boolean = false;
  numberOnly(event:any): boolean {
    // console.log(event);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.validnumber = true;
      return false;
     
    }
    this.validnumber = false;
    return true;

  }
}
