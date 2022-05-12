import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/routing/can-active';
import { LogOutComponent } from '../login-logout/log-out/log-out.component';
import { LoginAdminComponent } from '../login-logout/login-admin/login-admin.component';

const routes: Routes = [
  { path: 'login', component: LoginAdminComponent },
  { path: 'logout', component: LogOutComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLogoutRoutingModule { }
