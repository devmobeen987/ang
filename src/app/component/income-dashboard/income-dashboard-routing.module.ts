import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/routing/can-active';
import { IncomeDashbordComponent } from './income-dashbord/income-dashbord.component';

const routes: Routes = [
  { path: '', component: IncomeDashbordComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeDashboardRoutingModule { }
