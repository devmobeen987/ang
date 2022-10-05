import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorsRoutingModule } from './contractors-routing.module';
import { AddContractorsComponent } from './add-contractors/add-contractors.component';
import { UpdateContractorsComponent } from './update-contractors/update-contractors.component';
import { ListContractorsComponent } from './list-contractors/list-contractors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PaymentCalculatorComponent } from './payment-calculator/payment-calculator.component';


@NgModule({
  declarations: [
    AddContractorsComponent,
    UpdateContractorsComponent,
    ListContractorsComponent,
    PaymentCalculatorComponent
  ],
  imports: [
    CommonModule,
    ContractorsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
  ]
})
export class ContractorsModule { }
