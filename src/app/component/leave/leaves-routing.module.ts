import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/routing/can-active';
import { AddleaveComponent } from './addleave/addleave.component';
import { LeaveComponent } from './leave/leave.component';
import { ListLeaveComponent } from './list-leave/list-leave.component';

const routes: Routes = [
    { path: 'addleave', component: AddleaveComponent,canActivate: [AuthGuard] },
    { path: 'listleave', component: ListLeaveComponent,canActivate: [AuthGuard] },
    { path: 'empleavelist', component: LeaveComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
