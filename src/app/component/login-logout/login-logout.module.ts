import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLogoutRoutingModule } from './login-logout-routing.module';
import { LogOutComponent } from '../login-logout/log-out/log-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginAdminComponent } from '../login-logout/login-admin/login-admin.component';


@NgModule({
  declarations: [LoginAdminComponent,LogOutComponent],
  imports: [
    CommonModule,
    LoginLogoutRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class LoginLogoutModule { }
