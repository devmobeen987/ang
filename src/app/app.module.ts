import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddAdminModule } from './component/add-admin/add-admin.module';
import { AdminEditModule } from './component/admin-edit/admin-edit.module';
import { AdminProfileModule } from './component/admin-profile/admin-profile.module';
import { AlluserlistModule } from './component/alluserlist/alluserlist.module';
import { AppRoutingModule } from './routing/app-routing.module';
// import { SidbarModule } from './sidenav/sidbar/sidbar.module'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewUpdateListModule } from './view-update-list/view-update-list.module';
import { SingalUpdateDataModule } from './component/singal-update-data/singal-update-data.module';
import { CompanyDashboardModule } from './component/company-dashboard/company-dashboard.module';
import { NgChartsModule } from 'ng2-charts';
import {MatExpansionModule} from '@angular/material/expansion';

// import { AddEmployeeModule } from './component/EmployeeCurd/add-employee/add-employee.module';
// import { EditEmployeeModule } from './component/EmployeeCurd/edit-employee/edit-employee.module';
// import { DeleteEmployeeModule } from './component/EmployeeCurd/delete-employee/delete-employee.module';
// import { LogOutModule } from './component/log-out/log-out.module';
// import { UpdateEmployeeModule } from './component/EmployeeCurd/update-employee/update-employee.module';
// import { EmployeeModule } from './component/EmployeeCurd/employee.module';
// import { ViewEmployeeModule } from './component/EmployeeCurd/view-employee/view-employee.module';
// import { AddDailyUpdateComponent } from './component/EmployeeCurd/add-daily-update/add-daily-update.component';
// import { LeaveModule } from './component/leave/leave/leave.module';
// import { AddDailyUpdateModule } from './component/EmployeeCurd/add-daily-update/add-daily-update.module';
// import { AddleaveModule } from './component/leave/addleave/addleave.module';
// import { ListLeaveModule } from './component/leave/list-leave/list-leave.module';
// import { LoginAdminModule } from './component/login-admin/login-admin.module';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddAdminModule,
    HttpClientModule,
    AdminProfileModule,
    AdminEditModule,
    AlluserlistModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    // SidbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatToolbarModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    TextFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,

    ViewUpdateListModule,
    SingalUpdateDataModule,
    CompanyDashboardModule,
    NgChartsModule
    // LeaveModule,
    // AddleaveModule,
    // ListLeaveModule,
    // AddDailyUpdateModule,
    // LoginAdminModule,
     // LogOutModule,
    // UpdateEmployeeModule,
    //employee
    // AddEmployeeModule,
    // ViewEmployeeModule,
    // EditEmployeeModule,
      // DeleteEmployeeModule,
   
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
