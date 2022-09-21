import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from '../client/add-client/add-client.component';
import { EditClientComponent } from '../client/edit-client/edit-client.component';
import { ViewClientComponent } from '../client/view-client/view-client.component';
import { AuthGuard } from '../routing/can-active';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  { path: 'add', component: AddProjectComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ViewProjectComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditProjectComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
