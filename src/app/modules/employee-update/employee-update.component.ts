import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {FormControl, FormGroup} from '@angular/forms';

import Employee from '@app/core/models/employee.model';
import EmployeeService from '@app/core/services/employee.service';
import {Locations, Positions} from '@app/core/models/static.data'
import { Router, ActivatedRoute } from '@angular/router';
import { log } from 'util';



@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit, OnDestroy {
  employee:Employee = new Employee();
  subscription: Subscription;
  locations = Locations;
  positions = Positions;
 // employeeForm: FormGroup;
 // date = new FormControl(new Date());
  

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log("Employee update");
    console.log(this.route);
    this.subscription = this.route.params.subscribe(params =>{
      const id = params['id'];
      console.log(this.subscription);
      console.log(id);
     
      if (id) {
        this.employeeService.getEmployee(id).subscribe((employee:any) =>{
          console.log(employee);
          if (employee) {
            this.employee = employee;
            console.log(this.employee);
          }
          else{
            console.log(`Can't find employee with ${id}`);
            this.gotoEmployeeList();
          }

        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  saveEmployee (employeeForm) {
    console.log ("employeeForm");
    console.log (employeeForm);
    this. updateEmployee(employeeForm.value);
    console.log ("employee");
    console.log (this.employee);

    this.employeeService.saveEmployee(this.employee).subscribe(
     result => {
       this.gotoEmployeeList();
     },
     error => console.log(error)
    )
  }

  updateEmployee(values:Object) {
    Object.assign(this.employee, values);
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }

  deleteEmployee(id: string){
    console.log("employee delete component");
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      result => {
        this.gotoEmployeeList();
      },
      error => console.log(error)
     )
  }




}
