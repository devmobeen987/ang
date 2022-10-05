import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routing/can-active';
import { AddContractorsComponent } from './add-contractors/add-contractors.component';
import { ListContractorsComponent } from './list-contractors/list-contractors.component';
import { PaymentCalculatorComponent } from './payment-calculator/payment-calculator.component';
import { UpdateContractorsComponent } from './update-contractors/update-contractors.component';

const routes: Routes = [
  { path: 'add', component: AddContractorsComponent,canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentCalculatorComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: UpdateContractorsComponent,canActivate: [AuthGuard] },
  { path: 'view', component: ListContractorsComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule { }
