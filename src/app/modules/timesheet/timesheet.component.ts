import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import  EmployeeService  from '@app/core/services/employee.service';
import  Employee  from '@app/core/models/employee.model';
import {Project} from '@app/core/models/project.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  public employee_id = '3693';
  projects:Array<Project>;
  displayedColumns: string[] = ['projectName', 'taskName'];
  dataSource:MatTableDataSource<Project>;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getProjectsByEmployeeId(this.employee_id).subscribe(data =>{
      console.log(data);
      this.projects = data;
      this.dataSource = new MatTableDataSource(this.projects);
      console.log(this.dataSource);
    })
  }

  // getTotalCost() {
  //   return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }
}
