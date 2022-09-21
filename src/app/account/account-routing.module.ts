import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routing/can-active';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';

const routes: Routes = [
  { path: 'add', component: AddAccountComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ViewAccountComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditAccountComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
