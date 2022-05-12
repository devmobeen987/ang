import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-card',
  templateUrl: './dashbord-card.component.html',
  styleUrls: ['./dashbord-card.component.css']
})
export class DashbordCardComponent implements OnInit {
@Input() total:any
@Input() Headerdata:any
  constructor() { }

  ngOnInit(): void {
  }

}
