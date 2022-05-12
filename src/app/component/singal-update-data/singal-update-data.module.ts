import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingalUpdateDataComponent } from './singal-update-data.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SingalUpdateDataComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
    
  ]
})
export class SingalUpdateDataModule { }
