import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-card',
  templateUrl: './dashbord-card.component.html',
  styleUrls: ['./dashbord-card.component.scss']
})
export class DashbordCardComponent implements OnInit {
@Input() total:any
@Input() Headerdata:any
  constructor() { }

  ngOnInit(): void {
  }

}
