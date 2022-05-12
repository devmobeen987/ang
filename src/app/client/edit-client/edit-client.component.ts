import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public edit_client_form = this.fb.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    country:[''],
    tecnology:[''],
    status:[''],
    startdate:[''],
    enddate:[''],
  })
  public id:any;
  constructor(private fb:FormBuilder, public api:AdminService, public router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
      this.id = data.id;
      console.log('s',this.id);
    })
    this.api.viewSingalClient(this.id).subscribe((val:any)=>{
        console.log(val);
        this.edit_client_form.patchValue({
          firstname:val.success.firstname,
          lastname:val.success.lastname,
          email:val.success.email,
          country:val.success.country,
          tecnology:val.success.tecnology,
          status:val.success.status,
          startdate:val.success.startdate,
          enddate:val.success.enddate,
        })
    });
  }

  submit(){

    const date = this.edit_client_form.value;
    const d = new Date(date.startdate);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const d1 = new Date(date.enddate);
    const data1 = d1.getFullYear()+"-"+ ("0"+(d1.getMonth()+1)).slice(-2) +"-"+("0" + d1.getDate()).slice(-2);
    let tecnology = '';
     this.edit_client_form.value.tecnology.forEach((val:any) => {
        // console.log(val);
        tecnology = tecnology+" "+val;
      });
      console.log(tecnology);
    const paylode = {
      firstname: this.edit_client_form.value.firstname,
      lastname: this.edit_client_form.value.lastname,
      email: this.edit_client_form.value.email,
      country: this.edit_client_form.value.country,
      tecnology: tecnology,
      status: this.edit_client_form.value.status,
      startdate:data,
      enddate:data1,
    }

    this.api.updateClient(this.id,paylode).subscribe((data:any)=>{
      console.log(data);
      alert(data.msg);
      this.router.navigate(['/client/list']);
    })



  }

}
