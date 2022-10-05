import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeDashboardRoutingModule } from './income-dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { IncomeDashbordComponent } from './income-dashbord/income-dashbord.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [IncomeDashbordComponent],
  imports: [
    CommonModule,
    IncomeDashboardRoutingModule,
    MatButtonToggleModule,
    MatToolbarModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgChartsModule,
    MatSnackBarModule,
  ]
})
export class IncomeDashboardModule { }
