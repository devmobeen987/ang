import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import { Clientlist } from '../../model/client.model';
import { clientlistApireq } from '../../model/client.model';
import { AccountService } from 'src/app/service/account.service';
import {
  AccountdetailApi,
  AccountresponsApi,
} from 'src/app/model/account.model';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss'],
})
export class AddIncomeComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  public add_income_form = this.fb.group({
    discription: [''],
    month: ['', Validators.required],
    years: ['', Validators.required],
    incomeData: this.fb.array([]),
  });

  // @ViewChild('datepicker')datePickerElement:any = MatDatepicker;
  // selectedFile:any = null;
  public clientName: Clientlist[] = [];
  public Month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public year: string[] = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
    '2036',
    '2037',
    '2038',
    '2039',
    '2040',
  ];
  public accountData: AccountdetailApi[] = [];
  constructor(
    private fb: FormBuilder,
    public api: AdminService,
    public router: Router,
    private _snackBar: MatSnackBar,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // console.log(this.add_income_form)
    this.loadeApi();
    this.loadAccount();
  }

  loadeApi() {
    this.api
      .viewClientlist()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data: clientlistApireq) => {
          this.clientName = data.success;
        },
        (err) => {
          console.log('dkd', err);
          if (err.status == '401') {
            this.router.navigate(['/auth/login']);
          }
        }
      );
  }
  loadAccount() {
    this.accountService.viewAccount().subscribe({
      next: (e: AccountresponsApi) => {
        this.accountData = e.data;
        console.log(this.accountData);
      },
      error: (e) => {},
    });
  }
  validnumber: boolean = false;
  numberOnly(event: any): boolean {
    console.log(event);
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.validnumber = true;
      return false;
    }
    this.validnumber = false;
    return true;
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  submit(e: any) {
    e.target.disabled = true;
    // return
    this.api
      .addIncome(this.add_income_form.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data: any) => {
          //  alert(data.msg);
          this._snackBar.open(data.msg, '', {
            duration: this.durationInSeconds * 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          setTimeout(() => {
            e.target.disabled = false;
            this.router.navigate(['income/list']);
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

  incomeData() {
    return this.add_income_form.controls['incomeData'] as FormArray;
  }

  addLesson() {
    const lessonForm: FormGroup = this.fb.group({
      clientID: ['', Validators.required],
      amount: ['', Validators.required],
      discription: [''],
      tds: [''],
      account_id: [''],
    });
    this.incomeData().push(lessonForm as FormGroup);
  }

  deleteLesson(lessonIndex: any) {
    console.log(lessonIndex);
    this.incomeData().removeAt(lessonIndex);
  }
}
