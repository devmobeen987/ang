import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { ApiResponseMsg } from '../model/account.model';
import { AddContractorApi } from '../model/contractor.model';


@Injectable({
  providedIn: 'root'
})
export class ContractorService {
  url = "http://127.0.0.1:8000/api";
//   url = "https://imaclowd.com/atendenceproject/api";
  pipe: any;
  constructor(private http: HttpClient) { }


  viewContractor(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/contractor',httpOptions);
  }

  addContractor(req:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/contractor/add/',req,httpOptions);
  }

  singalContractor(id:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/contractor/singalContractor/'+id,httpOptions);
  }

  updateContractor(req:any,id:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post<AddContractorApi>(this.url+'/contractor/edit/'+id,req,httpOptions) .pipe(
      catchError(this.handleError)
      );;
  }
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    
    console.log('jjj',error);
    return throwError(() => {
        return errorMessage;
    });
  }
 
  deleteContractor(id:any):Observable<ApiResponseMsg>{
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post<ApiResponseMsg>(this.url+'/contractor/delete/'+id,{},httpOptions);
  }

  

  
}