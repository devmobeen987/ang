import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routing/can-active';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ViewClientComponent } from './view-client/view-client.component';

const routes: Routes = [
  { path: 'add', component: AddClientComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ViewClientComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditClientComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
