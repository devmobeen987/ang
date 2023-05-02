import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routing/can-active';
import { SalaryComponent } from './viewsalary/salary.component';

const routes: Routes = [
  { path: 'view', component: SalaryComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryRoutingModule { }
