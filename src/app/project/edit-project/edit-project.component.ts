import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { SingalprojectApi} from '../../model/project.model';
import { UpdateprojectApi} from '../../model/project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  public edit_project_form = this.fb.group({
    projectname:[''],
    clientID:[''],
    startdate:[''],
    enddate:[''],
    status:[''],
  });
  public clientName:any = [];
  public id:any;
  constructor(private fb:FormBuilder, public api:AdminService, public router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
      this.id = data.id;
      console.log('s',this.id);
    });
    this.LoadeApi();
  }

  LoadeApi(){
    console.log('jmjm');
    // let val:any = [];
    this.api.viewsingalprojectlist(this.id).subscribe((data:SingalprojectApi)=>{
     console.log(data);
      this.clientName = data.client;
      this.edit_project_form.patchValue({
        projectname:data.success.projectname,
        clientID:data.success.clientID,
        startdate:data.success.startdate,
        enddate:data.success.enddate,
        status:data.success.status,
      })
    },
    err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
  });

  }

  update(){
    const date = this.edit_project_form.value;
    const d = new Date(date.startdate);
    const data = d.getFullYear()+"-"+ ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    const d1 = new Date(date.enddate);
    const data1 = d1.getFullYear()+"-"+ ("0"+(d1.getMonth()+1)).slice(-2) +"-"+("0" + d1.getDate()).slice(-2);
    const req= {
      projectname:this.edit_project_form.value.projectname,
        clientID:this.edit_project_form.value.clientID,
        startdate:data,
        enddate:data1,
        status:this.edit_project_form.value.status,
    }
    console.log(req);
    this.api.updateproject(this.id,req).subscribe((data:any)=>{
      console.log(data);
      alert(data.msg);
      this.router.navigate(['/project/list']);

    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
    
  }

}
