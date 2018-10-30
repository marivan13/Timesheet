import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Employee from '../employee/employee.model';


@Injectable( )
export default class EmployeeService {

  public API = 'http://aac-vm.universe.dart.spb:8080/api';
  public EMPLOYEES_API = `${this.API}/employees`;
  public HEADER = new HttpHeaders().append('API_KEY', 'PzdpccFUoHbV%2fWozyO7vx0Qv%2faK7OcFWjl%2br9tbhIhQ%3d');

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>(this.EMPLOYEES_API, {headers: this.HEADER});
  }
}
