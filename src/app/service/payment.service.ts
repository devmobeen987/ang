import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';

import { AddContractorApi } from '../model/contractor.model';


@Injectable({
  providedIn: 'root'
})

export class PaymentService {
 // url = "http://127.0.0.1:8000/api";
 url = "https://imaclowd.com/atendenceproject/api";
 pipe: any;
 constructor(private http: HttpClient) { }


 addpayment(req:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post<AddContractorApi>(this.url+'/payment/add/',req,httpOptions).pipe(
        catchError(this.handleError)
        );
  }

  viewsalary(req:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/viewsalary/',req).pipe(
        catchError(this.handleError)
        );
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
     console.log('mm',error);
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }

}