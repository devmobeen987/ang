import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  public headercolumn: string[] = [
    'name','date','starttime','endtime','update','Action'];
 
  constructor(private api:AdminService) { }

  ngOnInit(): void {
  }



}
