import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from '../component/add-admin/add-admin.component';
import { AdminProfileComponent } from '../component/admin-profile/admin-profile.component';
import { AdminEditComponent } from '../component/admin-edit/admin-edit.component';
import { AlluserlistComponent } from '../component/alluserlist/alluserlist.component';
import { AuthGuard } from './can-active';
import { CompanyComponent } from '../company/company.component';
import { EmployeeComponent } from '../employee/employee.component';
import { SingalUpdateDataComponent } from '../component/singal-update-data/singal-update-data.component';
import { CompanyDashboardComponent } from '../component/company-dashboard/company-dashboard.component';


const routes: Routes = [
  { path: 'register', component: AddAdminComponent,canActivate: [AuthGuard] },
  { path: 'profile', component: AdminProfileComponent,canActivate: [AuthGuard] },
  { path: 'edit', component: AdminEditComponent,canActivate: [AuthGuard] },
  { path: 'alluser', component: AlluserlistComponent,canActivate: [AuthGuard] },
  { path: 'compnaydashbord', component: CompanyDashboardComponent,canActivate: [AuthGuard] },
  { path: 'singalupdatedata/:id', component: SingalUpdateDataComponent,canActivate: [AuthGuard] },
  { path: 'company', component: CompanyComponent,canActivate: [AuthGuard] },
  { path: 'employee', component: EmployeeComponent,canActivate: [AuthGuard] },
  { path: 'employee', loadChildren: () => import('../component/EmployeeCurd/employee.module').then(m => m.EmployeeModule)},
  { path: 'leave', loadChildren: () => import('../component/leave/leaves.module').then(m => m.LeavesModule) },
  { path: 'auth', loadChildren: () => import('../component/login-logout/login-logout.module').then(m => m.LoginLogoutModule) },
  { path: 'client', loadChildren: () => import('../client/client.module').then(m =>m.ClientModule)},
  { path: 'project', loadChildren: () => import('../project/project.module').then(m =>m.ProjectModule)},
  { path: 'income', loadChildren: () => import('../income/income.module').then(m =>m.IncomeModule)},
  { path: 'expanse', loadChildren: () => import('../expanse/expanse.module').then(m =>m.ExpanseModule)},
  { path: 'account', loadChildren: () => import('../account/account.module').then(m =>m.AccountModule)},
  { path: 'contractor', loadChildren: () => import('../contractors/contractors.module').then(m =>m.ContractorsModule)},
  { path: 'incomedashbord', loadChildren: () => import('../component/income-dashboard/income-dashboard.module').then(m =>m.IncomeDashboardModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


