import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { ViewIncomeComponent } from './view-income/view-income.component';
import { EditIncomeComponent } from './edit-income/edit-income.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DeletepopupComponent } from './deletepopup/deletepopup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChildAddIncomeComponent } from './child-add-income/child-add-income.component';
import { ViewClientIncomeComponent } from './view-client-income/view-client-income.component';
// import { AddEditButtonComponent } from './add-edit-button/add-edit-button.component';
// import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ViewIncomeComponent,
    EditIncomeComponent,
    AddIncomeComponent,
    DeletepopupComponent,
    ChildAddIncomeComponent,
    ViewClientIncomeComponent,
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
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
export class IncomeModule { }
