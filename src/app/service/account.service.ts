import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ApiResponseData, ApiResponseMsg } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // url = "http://127.0.0.1:8000/api";
  url = "https://imaclowd.com/atendenceproject/api";
  pipe: any;
  constructor(private http: HttpClient) { }


  viewAccount(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/account',httpOptions);
  }

  addAccount(req:any):Observable<ApiResponseMsg>{
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post<ApiResponseMsg>(this.url+'/account/add/',req,httpOptions);
  }
  singalAccountdata(id:any): Observable<ApiResponseData>{
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<ApiResponseData>(this.url+'/account/singaldata/'+id,httpOptions);
  }

  updateAccountdata(id:any,req:any):Observable<ApiResponseMsg>{
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post<ApiResponseMsg>(this.url+'/account/edit/'+id,req,httpOptions);
  }

  deleteAccount(id:any):Observable<ApiResponseMsg> {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post<ApiResponseMsg>(this.url+'/account/delete/'+id,{},httpOptions);
  }



}

