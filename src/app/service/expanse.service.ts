import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpanseService {
  url = "http://127.0.0.1:8000/api";
  // url = "https://imaclowd.com/atendenceproject/api";
  pipe: any;
  constructor(private http: HttpClient) { }


  viewexpanse(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/expanse',httpOptions);
  }

  addExpanse(req:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/expanse/add/',req,httpOptions);
  }

  singalExpanse(id:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/expanse/singalincome/'+id,httpOptions);
  }

  updateExpanse(req:any,id:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/expanse/edit/'+id,req,httpOptions);
  }

  expanseDashbordTotal(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/expanse/totalexpansedashbord',httpOptions);

  }
  
}