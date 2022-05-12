import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUpdateListComponent } from './view-update-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ViewUpdateListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  exports:[ViewUpdateListComponent]
})
export class ViewUpdateListModule { }
