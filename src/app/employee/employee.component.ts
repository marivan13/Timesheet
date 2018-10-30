import { Component, OnInit } from '@angular/core';
import  EmployeeService  from '../employee/employee.service';
import  Employee  from '../employee/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employees: Array<Employee>;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;
    });
  }

}
