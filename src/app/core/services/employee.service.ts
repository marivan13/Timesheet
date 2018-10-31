import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Employee from '@app/core/models/employee.model';
import {environment} from '@env/environment';

@Injectable(
  {providedIn: 'root'
})
export default class EmployeeService {

 // public API = 'http://aac-vm.universe.dart.spb:8080/api';
  public EMPLOYEES_API = `${environment.api}/employees`;
  public HEADER = new HttpHeaders().append('API_KEY', environment.api_key);

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>(this.EMPLOYEES_API, {headers: this.HEADER});
  }
}
