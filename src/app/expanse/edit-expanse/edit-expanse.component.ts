import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {
  AccountdetailApi,
  AccountresponsApi,
} from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';
import { ExpanseService } from 'src/app/service/expanse.service';

@Component({
  selector: 'app-edit-expanse',
  templateUrl: './edit-expanse.component.html',
  styleUrls: ['./edit-expanse.component.scss'],
})
export class EditExpanseComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  public edit_expanse_form = this.fb.group({
    discription: [''],
    amount: [''],
    date: [''],
    type: [''],
    tds: [''],
    account_id: [''],
  });

  constructor(
    private fb: FormBuilder,
    public api: ExpanseService,
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private accountService: AccountService
  ) {}

  public id: any;

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (data: any) => {
        this.id = data.id;
        console.log('s', this.id);
      },
      (err) => {
        console.log('dkd', err);
        if (err.status == '401') {
          this.router.navigate(['/auth/login']);
        }
      }
    );
    this.loadeapi();
    this.loadExpenseType();
    this.loadAccount();
  }
  public expensetypelist:any;

  loadeapi() {
    this.api
      .singalExpanse(this.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res: any) => {
          this.edit_expanse_form.patchValue({
            discription: res.data.discription,
            date: res.data.date,
            amount: res.data.amount,
            type: Number(res.data.type),
            tds: res.data.tds,
            account_id: Number(res.data.account_id),
          });
          console.log(this.edit_expanse_form);

        },
        (err) => {
          console.log('dkd', err);
          if (err.status == '401') {
            this.router.navigate(['/auth/login']);
          }
        }
      );
  }
  public accountData: AccountdetailApi[] = [];

  loadAccount() {
    this.accountService.viewAccount().subscribe({
      next: (e: AccountresponsApi) => {
        this.accountData = e.data;
        console.log(this.accountData);
      },
      error: (e) => {},
    });
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  update() {
    const date = this.edit_expanse_form.value;
    const d = new Date(date.date);
    const data =
      d.getFullYear() +
      '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + d.getDate()).slice(-2);
    const paylode = {
      amount: this.edit_expanse_form.value.amount,
      discription: this.edit_expanse_form.value.discription,
      type: this.edit_expanse_form.value.type,
      date: data,
      tds: this.edit_expanse_form.value.tds,
      account_id: this.edit_expanse_form.value.account_id,
    };
    console.log(paylode);
    this.api
      .updateExpanse(paylode, this.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res: any) => {
          console.log(res.msg);
          this._snackBar.open(res.msg, '', {
            duration: this.durationInSeconds * 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          setTimeout(() => {
            this.router.navigate(['expanse/list']);
          }, 2000);
        },
        (err) => {
          console.log('dkd', err);
          if (err.status == '401') {
            this.router.navigate(['/auth/login']);
          }
        }
      );
  }

  validnumber: boolean = false;
  numberOnly(event: any): boolean {
    // console.log(event);
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.validnumber = true;
      return false;
    }
    this.validnumber = false;
    return true;
  }
  loadExpenseType(){
    this.api.viewexpansetype().pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:any)=>{
      console.log(';;;;;lll',e.data)
      this.expensetypelist = e.data;
    })
  }
}
