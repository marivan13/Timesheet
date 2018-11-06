import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {FormControl} from '@angular/forms';

import Employee from '@app/core/models/employee.model';
import EmployeeService from '@app/core/services/employee.service';
import {Locations, Positions} from '@app/core/models/static.data'
import { Router, ActivatedRoute } from '@angular/router';



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
 // date = new FormControl(new Date());
  

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log("Employee update");
    console.log(this.locations);
    this.subscription = this.route.params.subscribe(params =>{
      const id = params['id'];
      console.log(id);
     
      if (id) {
        this.employeeService.getEmployee(id).subscribe((employee:any) =>{
          if (employee) {
            this.employee = employee;
          //  this.date = employee.Birthday;
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

  save (form:any) {
    this.employeeService.saveEmployee(form.value).subscribe(
      result => {
        this.gotoEmployeeList();
      },
      error => console.log(error)
    )
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
