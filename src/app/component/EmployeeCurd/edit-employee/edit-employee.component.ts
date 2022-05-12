import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public edit_employee_form = this.fb.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    username:[''],
    address:[''],
    experience:[''],
    employeetype:[''],
    status:[''],
    password:[''],
    confirmpassword:[''],
    date:[''],
  });
  image = '';
  public showdate:boolean = false;
  public selectedFile:any = null;
  public id:any = '';
  public is_notice = 'no';
  constructor(private fb:FormBuilder, private api:AdminService, private route:ActivatedRoute, private router:Router) { }
   
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
       this.id = params.get('id');

      console.log(this.id);

    });
    this.api.getsingalemployee(this.id).subscribe((val:any)=>{
    
     this.edit_employee_form.patchValue({
      firstname:val.success.firstname,
      lastname:val.success.lastname,
      email:val.success.email,
      username:val.success.username,
      address:val.success.address,
      experience:val.success.experience,
      employeetype:val.success.employeetype,
      status:val.success.status,
    })
    this.image = val.success.photo;
    console.log('gvh',val);
    console.log('gvh',this.image);
    });
  }
  onFileSelected(e:any){
    this.selectedFile = e.target.files[0];
    console.log(this.selectedFile);
  }
  update(){

    const date = this.edit_employee_form.value.date;
    const d = new Date(date);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);

    const paylode = new FormData();
    if(this.selectedFile.name!==null){
      paylode.append("photo",this.selectedFile, this.selectedFile.name);
    }
    paylode.append("firstname",this.edit_employee_form.value.firstname);
    paylode.append("lastname",this.edit_employee_form.value.lastname);
    paylode.append("email",this.edit_employee_form.value.email);
    paylode.append("username",this.edit_employee_form.value.username);
    paylode.append("address",this.edit_employee_form.value.address);
    paylode.append("experience",this.edit_employee_form.value.experience);
    paylode.append("employeetype",this.edit_employee_form.value.employeetype);
    paylode.append("status",this.edit_employee_form.value.status);
    paylode.append("date",data);
    paylode.append("is_notice",this.is_notice);
    this.api.UpdateEmployee(this.id,paylode).subscribe((data:any)=>{
      console.log(data);
      alert(data.msg);
      this.router.navigate(['/employee/viewemployee']);
    })
  }

  isnotice(e:any){
      console.log(e.target.checked);
      this.showdate = e.target.checked;
      if(this.showdate==true){
          this.is_notice = 'yes';
      }
      if(this.showdate==false){
        this.is_notice = 'no';
    }
      console.log(this.is_notice);
  }
  

}
