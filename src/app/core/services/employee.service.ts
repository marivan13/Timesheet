import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Employee from '@app/core/models/employee.model';
import {environment} from '@env/environment';
import { map } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export default class EmployeeService {

 // public API = 'http://aac-vm.universe.dart.spb:8080/api';
  public employees_path = "/employees";
 // public HEADER = new HttpHeaders().append('API_KEY', environment.api_key);

  //constructor(private http:HttpClient) { }

  constructor(private apiService:ApiService) { }
  getAllEmployees(): Observable<Array<Employee>>{
    return this.apiService.getAll('/employees');
  }

  getEmployee(id:string){
   // return this.apiService.get('/employees/'+id).pipe(map((data: {employee:Employee}) => data.employee));
    return this.apiService.get('/employees/'+id);
  }

  saveEmployee(employee):Observable<Employee> {
    //update existing employee
    if (employee.Id) {

        return this.apiService.put("/employees/",{employee:employee})
        .pipe(map(data => data.employee));
    }
    //add new employee
    else{
        return this.apiService.post("/employees/",{employee:employee})
        .pipe(map(data => data.employee));;
    }
  }

  // getEmployee(id:string){
  //   return this.http.get(`${this.EMPLOYEES_API}/${id}`, {headers: this.HEADER});
  // }

  // saveEmployee(employee:Employee):Observable<Employee> {
  //   let updatedEmployee: Observable<Employee>;
  //   if (employee.Id) {
  //     console.log(employee);
  //     updatedEmployee = this.http.put<Employee>(`${this.EMPLOYEES_API}`, {employee: employee},
  //     {headers: this.HEADER});
  //     console.log(updatedEmployee);
  //   }
  //   else {
  //     console.log(employee);
  //     updatedEmployee = this.http.post<Employee>(this.EMPLOYEES_API, employee, {headers: this.HEADER});
  //   }
  //   return updatedEmployee;
  // }
}
