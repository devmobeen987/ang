import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordCardComponent } from './dashbord-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DashbordCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[DashbordCardComponent]
})
export class DashbordCardModule { }
