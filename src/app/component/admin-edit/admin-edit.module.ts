import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEditComponent } from './admin-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AdminEditModule { }
