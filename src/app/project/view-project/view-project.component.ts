import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { projectList} from '../../model/project.model';
import { projectApi} from '../../model/project.model';


@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  // public employeedata: any = {};
  public projectdata = new MatTableDataSource<any[]>([]);
  public id: any
  public isShow: boolean = false;
  public headercolumn: string[] = [
    'id',
    'projectname',
    'clientname',
    'startdate',
    'enddate',
    'status',
    'Action'];
  constructor(private api: AdminService, public dialog: MatDialog, public router:Router) { }
  @ViewChild('Paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.loadApiData();
  }


  loadApiData(){
    let val:any = []
    this.api.viewProject().subscribe((data:projectApi)=>{
      console.log('ss',data);
      data.data.forEach((element: projectList) => {
        val.push(element);
        // console.log('a',element);
      });

      this.projectdata = new MatTableDataSource(val);
      this.projectdata.paginator = this.paginator;
      this.projectdata.sort = this.sort;
      console.log(this.projectdata);
    },err=>{
      if(err.status=='401'){
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
