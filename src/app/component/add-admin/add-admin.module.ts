import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AddAdminModule { }
