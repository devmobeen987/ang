import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-alluserlist',
  templateUrl: './alluserlist.component.html',
  styleUrls: ['./alluserlist.component.css']
})
export class AlluserlistComponent implements OnInit {


 public list:any = [];
  constructor(private Api:AdminService, ) { }

  ngOnInit(): void {
    this. loadeuserlist();
  }

  loadeuserlist(){
  this.Api.getUsers().subscribe((data:any)=>{
    console.log('djsfn',data)
    this.list = data;
  });
  }

  delete(id:any){
console.log('njnj',id);
  }

}
