import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesRoutingModule } from './leaves-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddleaveComponent } from './addleave/addleave.component';
import { ListLeaveComponent } from './list-leave/list-leave.component';
import { LeaveComponent } from './leave/leave.component';


@NgModule({
  declarations: [
    AddleaveComponent,
    ListLeaveComponent,
    LeaveComponent,
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
  ]
})
export class LeavesModule { }
