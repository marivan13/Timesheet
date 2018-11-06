import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import  EmployeeService  from '@app/core/services/employee.service';
import  Employee  from '@app/core/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Array<Employee>;
  displayedColumns = ['name', 'email', 'phone', 'skype', 'edit', 'delete'];
  dataSource:MatTableDataSource<Employee>;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      console.log(this.dataSource);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
