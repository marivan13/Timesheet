import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Employee from '@app/core/models/employee.model';
import {Project} from 'app/core/models/project.model';
import { map } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export default class EmployeeService {

 // public API = 'http://aac-vm.universe.dart.spb:8080/api';
  public employees_path = "/employees/";
 // public HEADER = new HttpHeaders().append('API_KEY', environment.api_key);

  //constructor(private http:HttpClient) { }

  constructor(private apiService:ApiService) { }

  public projectId:string;
  public key:string;

  private searchParams = new HttpParams()
    .set('key', this.key)
    .set('projectId', this.projectId);
    
  getAllEmployees(): Observable<Array<Employee>>{
    return this.apiService.getAll(this.apiService.employee_path);
  }

  getEmployee(id:string){
   // return this.apiService.get('/employees/'+id).pipe(map((data: {employee:Employee}) => data.employee));
    return this.apiService.get(`${this.apiService.employee_path}/${id}`);
  }

  saveEmployee(employee):Observable<Employee> {
    //update existing employee
    if (employee.Id) {
       console.log("Employee service");
       console.log(employee);
        return this.apiService.put(`${this.apiService.employee_path}/`, employee)
       .pipe(map(data => data.employee));
    }
    //add new employee
    else{
        return this.apiService.post(`${this.apiService.employee_path}/`, employee)
        .pipe(map(data => data.employee));
    }
  }

  deleteEmployee(id:string){
    console.log("delete");
    console.log(id);
    return this.apiService.delete(`${this.apiService.employee_path}/${id}`);
  }

  getProjectsByEmployeeId(id:string):Observable<Array<Project>> {
    return this.apiService.getAll(`${this.apiService.employee_path}/${id}/${this.apiService.project_path}`);
  }

  searchEmployee():Observable<Array<Employee>>{
    console.log(this.searchParams);
   // let params = this.apiService.getParamsFromQuery({projectId, key});
    return this.apiService.search(this.employees_path, this.searchParams);
  }

}


   ///todo
   //login employee
   // search employee
