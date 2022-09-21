import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-alluserlist',
  templateUrl: './alluserlist.component.html',
  styleUrls: ['./alluserlist.component.scss']
})
export class AlluserlistComponent implements OnInit {


 public list:any = [];
  constructor(private Api:AdminService,public router:Router ) { }

  ngOnInit(): void {
    this. loadeuserlist();
  }

  loadeuserlist(){
  this.Api.getUsers().subscribe((data:any)=>{
    console.log('djsfn',data)
    this.list = data;
  },err=>{
    if(err.status=='401'){
      this.router.navigate(['/auth/login']);
    }
  });
  }

  delete(id:any){
    console.log('njnj',id);
  }

}
