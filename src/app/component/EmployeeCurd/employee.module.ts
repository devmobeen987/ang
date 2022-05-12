import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddDailyUpdateComponent } from './add-daily-update/add-daily-update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { MatNativeDateModule } from '@angular/material/core';
// 
import { DashbordCardModule } from '../dashbord-card/dashbord-card.module';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    AddDailyUpdateComponent,
    DeleteEmployeeComponent,
    EmployeeDashbordComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    TextFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    DashbordCardModule

  ]
})
export class EmployeeModule { }
