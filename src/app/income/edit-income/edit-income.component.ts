import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Clientlist, clientlistApireq } from 'src/app/model/client.model';
import { incomesingallistApi, incomesingallistApisecond } from 'src/app/model/income.model';
import { AdminService } from 'src/app/service/admin.service';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.scss']
})
export class EditIncomeComponent implements OnInit {

  public edit_income_form = this.fb.group({
    id: [''],
    discription: [''],
    month: ['', Validators.required],
    years: ['', Validators.required],
    incomeData: this.fb.array([])
  });
  public loading: boolean = false;
  public clientName: Clientlist[] = [];
  public id: any;
  public Month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public year: string[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040'];



  private ngUnsubscribe = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    public api: AdminService,
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: any) => {
      this.id = data.id;
      console.log('s', this.id);
    });
    this.clientApi();
    this.loadesingalclientapi();
  }

  numberOnly(event: any): boolean {
    // console.log(event);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  clientApi() {

    this.api.viewClientlist().pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: clientlistApireq) => {
      this.clientName = data.success;
    })
  }

  loadesingalclientapi() {
    this.api.viewsingalincome(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: incomesingallistApisecond) => {
      // console.log(val);
      let data: incomesingallistApi[] = val.data;
      let startdate = data[0].startdate;
      let date = startdate ? startdate.split('-') : []
      let month1 = date[1];

      val.data.forEach((v: incomesingallistApi) => {
        v.clientID = Number(v.clientID);
        this.incomeData.push(this.newClientInfo({
          discription: v.ci_descr,
          amount: v.amount,
          clientID: v.clientID,
          ci_id: v.ci_id,
          tds: v.tds,
        }) as FormGroup);

      });
      console.log(date)
      this.edit_income_form.patchValue({
        month: parseInt(month1),
        years: date[0],
        discription: val.data[0].discription,
        id: val.data[0].id
      });
      // console.log(this.edit_income_form.);

    });

  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  update() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    console.log(this.edit_income_form.value);
    this.api.updateClientApi(this.id, this.edit_income_form.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: any) => {
      console.log(data);
      this._snackBar.open(data.msg, '',
        {
          duration: this.durationInSeconds * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      setTimeout(() => {
        this.router.navigate(['income/list']);
      }, 100);
      // alert(data.msg);
    },
      err => {
        console.log('dkd', err);
        if (err.status == '401') {
          this.router.navigate(['/auth/login']);
        }
      });

  }

  newClientInfo(val: any): FormGroup {
    return this.fb.group(val)
  }

  get incomeData() {
    return this.edit_income_form.controls["incomeData"] as FormArray;
  }

  addLesson() {
    const lessonForm: FormGroup = this.fb.group({
      clientID: [null, Validators.required],
      amount: ['', Validators.required],
      discription: [''],
      tds: [''],
    });

    this.incomeData.push(lessonForm as FormGroup);
    console.log(this.incomeData);
  }
  loader: boolean = false;
  rowID: any;
  deleteLesson(lessonIndex: number, data: any) {
    const dialogref = this.dialog.open(DeletepopupComponent);
    dialogref.afterClosed().subscribe((result: any) => {
      if (result.event == "no") {
        console.log('nosd');
      }
      if (result.event == "yes") {
        this.loader = true;
        this.rowID = lessonIndex;
        this.api.deleteClientIncome(data.value).pipe(takeUntil(this.ngUnsubscribe))
          .subscribe((data: any) => {
            //  console.log(data.msg)
            this.loader = false;
            this.incomeData.removeAt(lessonIndex);
          })
      }
    }, err => {
      if (err.status == '401') {
        this.router.navigate(['/auth/login']);
      }
    });



  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

