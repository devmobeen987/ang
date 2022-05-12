import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlluserlistComponent } from './alluserlist.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AlluserlistComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class AlluserlistModule { }
