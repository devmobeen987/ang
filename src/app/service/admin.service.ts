import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  username = new Subject<any>();
  totalemployee = new Subject<any>();
  token = new Subject<any>();
  role = new Subject<any>();



  getUsers() {
    return this.http.get(this.url + '/userlist');
  }

  getsingalUsersdata() {
    return this.http.get(this.url + '/edit');
  }

  updateUserdata(id: any, edit: any) {
    return this.http.put(this.url + '/edituser/' + id, edit);
  }

  addUser(adddata: any): Observable<any> {
    return this.http.post<any>(this.url + '/add', adddata);
  }

  loginUser(login: any) {
    return this.http.post(this.url + '/login', login);
  }
  
  logout() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url + '/logout', { limit: 10 }, httpOptions);
  }

  loginUserdata(token: any) {
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url + '/profile', { limit: 10 }, httpOptions);

  }

  // employees data api 

  addemployee(empdata: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    console.log(empdata)
    return this.http.post<any>(this.url + '/addemp', empdata, httpOptions);
  }

  getsingalemployee(id: any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url + '/editemp/' + id,httpOptions);
  }

  getAllEmployee() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url + '/listemp',httpOptions);
  }

  UpdateEmployee(id:any, req:any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/updateEmp/'+id,req,httpOptions);
  }


  getEmployee() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/employee',httpOptions);
  }


  deleteEmployee(id:any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/deleteEmp/'+id,{},httpOptions);
  }

  addLeaves(req:any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/addleave',req,httpOptions);
  }

  listLeave() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/viewleave',httpOptions);
  }

  EmployeesLeavelist() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/listLeave',httpOptions);
  }

  EmployeesLeaveApprove(id:any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/leaveApprove/'+id,{},httpOptions);
  }
  
  EmployeesLeaveUnApprove(id:any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/leaveUnApprove/'+id,{},httpOptions);
  }

   
  EmployeeDailyupdate(req:any) {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.post(this.url+'/workupdate',req,httpOptions);
  }

  empworkUpdatelist() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/empworkupdate',httpOptions);
  }
  
  copmworkUpdatelist() {
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/compworkupdate',httpOptions);
  }

  // singal data from daily update list

  singalupdate(id:any){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/singalupdate/'+id,httpOptions);
  }

  gettotalcount(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/count',httpOptions);
  }

  gettotalempcount(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/empcount',httpOptions);
  }

  gettotalempEntrycount(){
    const token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + token
    });
    const httpOptions = {
      headers: headers_object
    }
    return this.http.get<any>(this.url+'/empEntrycount',httpOptions);
  }
/**client Api */
addClient(req:any){
  const token = localStorage.getItem('token');
  const headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + token
  });
  const httpOptions = {
    headers: headers_object
  }
  return this.http.post(this.url+'/client/add',req,httpOptions);
}

viewClient(){
  const token = localStorage.getItem('token');
  const headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + token
  });
  const httpOptions = {
    headers: headers_object
  }
  return this.http.get<any>(this.url+'/client',httpOptions);
}

viewSingalClient(id:any){
  const token = localStorage.getItem('token');
  const headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + token
  });
  const httpOptions = {
    headers: headers_object
  }
  return this.http.get<any>(this.url+'/client/singalclient/'+id,httpOptions);
}

updateClient(id:any,req:any){
  const token = localStorage.getItem('token');
  const headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + token
  });
  const httpOptions = {
    headers: headers_object
  }
  return this.http.post(this.url+'/client/edit/'+id,req,httpOptions);
}
/**client Api */
  



}
