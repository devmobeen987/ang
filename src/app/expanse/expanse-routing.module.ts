import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditIncomeComponent } from '../income/edit-income/edit-income.component';
import { ViewIncomeComponent } from '../income/view-income/view-income.component';
import { AuthGuard } from '../routing/can-active';
import { AddExpanseComponent } from './add-expanse/add-expanse.component';
import { EditExpanseComponent } from './edit-expanse/edit-expanse.component';
import { ViewExpanseComponent } from './view-expanse/view-expanse.component';

const routes: Routes = [
  { path: 'add', component: AddExpanseComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ViewExpanseComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditExpanseComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpanseRoutingModule { }
