import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/routing/can-active';
import { AddDailyUpdateComponent } from './add-daily-update/add-daily-update.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  { path: 'addemployee', component: AddEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'editemployee/:id', component: EditEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'viewemployee', component: ViewEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'update', component: UpdateEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'addupdate', component: AddDailyUpdateComponent,canActivate: [AuthGuard] },
  { path: 'dashbord', component: EmployeeDashbordComponent,canActivate: [AuthGuard] },
  { path: 'dashbord', component: EmployeeDashbordComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
