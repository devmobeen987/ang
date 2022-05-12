import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {AddClientapi} from 'src/app/model/client.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  public add_client_form = this.fb.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    country:[''],
    tecnology:[''],
    status:[''],
    startdate:[''],
    endDate:[''],
  })
  selectedFile:any = null;
  constructor(private fb:FormBuilder, public api:AdminService, public router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    const date = this.add_client_form.value;
    const d = new Date(date.startdate);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const d1 = new Date(date.endDate);
    const data1 = d1.getFullYear()+"-"+ ("0"+(d1.getMonth()+1)).slice(-2) +"-"+("0" + d1.getDate()).slice(-2);
    let tecnology = '';
     this.add_client_form.value.tecnology.forEach((val:any) => {
        // console.log(val);
        tecnology = tecnology+" "+val;
      });
      console.log(tecnology);
    const paylode = {
      firstname: this.add_client_form.value.firstname,
      lastname: this.add_client_form.value.lastname,
      email: this.add_client_form.value.email,
      country: this.add_client_form.value.country,
      tecnology: tecnology,
      status: this.add_client_form.value.status,
      startdate:data,
      enddate:data1,
    }
    console.log(paylode);
    this.api.addClient(paylode).subscribe((data:any)=>{
      console.log(data);
      alert(data.msg);
    })
    
  }

}
