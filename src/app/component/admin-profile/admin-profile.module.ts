import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-profile.component';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class AdminProfileModule { }
