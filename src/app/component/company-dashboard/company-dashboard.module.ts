import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DashbordCardModule } from '../dashbord-card/dashbord-card.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CompanyDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    DashbordCardModule,
    NgChartsModule

  ]
})
export class CompanyDashboardModule { }
