import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpanseRoutingModule } from './expanse-routing.module';
import { AddExpanseComponent } from './add-expanse/add-expanse.component';
import { EditExpanseComponent } from './edit-expanse/edit-expanse.component';
import { ViewExpanseComponent } from './view-expanse/view-expanse.component';
import { AgGridModule } from 'ag-grid-angular';
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
import { AddEditButtonComponent } from './add-edit-button/add-edit-button.component';


@NgModule({
  declarations: [
    AddExpanseComponent,
    EditExpanseComponent,
    ViewExpanseComponent,
    AddEditButtonComponent
  ],
  imports: [
    CommonModule,
    ExpanseRoutingModule,
    AgGridModule.withComponents([]) ,
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
    MatSnackBarModule
  ]
})
export class ExpanseModule { }
