import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { clientIncomeModel, ClientIncomesingallistModel, viewClientlistModel } from '../../model/client.model';
import { incomesingallistApi, incomesingallistApisecond } from 'src/app/model/income.model';
import { Clientlist } from 'src/app/model/project.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-client-income',
  templateUrl: './view-client-income.component.html',
  styleUrls: ['./view-client-income.component.scss']
})
export class ViewClientIncomeComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  public id:number = 0;
  public clientName:Clientlist[] = [];
  public listClientData:any[] = [];
  constructor(
    public api:AdminService,
    public router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ViewClientIncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    // this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data:any)=>{
    //   this.id = data.id;
    //   console.log('s',this.id);
    //   console.log('mmmmmmmm//',this.data);
    // });
    this.id = this.data.rowID;
    // this.clientNameApi();
    this.loadesingalclientapi();
    
  }

  // clientNameApi(){
    // this.api.viewClientlist().pipe(takeUntil(this.ngUnsubscribe)).subscribe((e:clientlistApireq)=>{
    //   this.clientName = e.success;
    //   console.log('sjjjd',e.success);
    // })
  // }

  loadesingalclientapi(){
    this.api.viewsingalClientIncomeInfo(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:clientIncomeModel)=>{
      console.log('nnnn[[[[[[//',res);
      res.data.forEach((e:ClientIncomesingallistModel) => {
        //  console.log('djjj',e);
        let tds = '';
        if(e.tds!=null){
           tds = e.tds+'%';
        }else{
          tds = '';
        }
         this.listClientData.push({
             'clientname':e.firstname+e.lastname,
             'email':e.email,
             'country':e.country,
             'amount':e.amount,
             'tds':tds,
             'startdate':e.startdate,
             'enddate':e.enddate,
             'discription':e.discription,
             'compdis':this.data.discription
         });
      });
    })
    // this.api.viewsingalincome(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((val:incomesingallistApisecond)=>{
    //   console.log('jjjj8888',val);
    //   val.data.forEach(e => {
    //     console.log('fkk');
    //     this.clientName.forEach((val)=>{
    //       if(val.id == e.clientID){
    //           this.listClientData.push({
    //             'clientname':val.firstname+val.lastname,
    //             'email':val.email,
    //             'amount':e.amount,
    //             'tds':e.tds,
    //             'address':val.country,
    //             'clientdiscription':e.ci_descr,
    //             'companydisc':e.discription,
    //             'startdate':e.startdate,
    //             'endDate':e.enddate
    //           });
    //       }
    //     });
    //   });
     
    // });

    console.log('ggggg////',this.listClientData);
 
    }

  

  onNoClick(){
    this.dialogRef.close({event:'no'});
  }

}
