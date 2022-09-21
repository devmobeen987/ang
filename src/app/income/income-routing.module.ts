import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routing/can-active';
import { AddIncomeComponent } from './add-income/add-income.component';
import { EditIncomeComponent } from './edit-income/edit-income.component';
import { ViewClientIncomeComponent } from './view-client-income/view-client-income.component';
import { ViewIncomeComponent } from './view-income/view-income.component';

const routes: Routes = [
  { path: 'add', component: AddIncomeComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ViewIncomeComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditIncomeComponent,canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
