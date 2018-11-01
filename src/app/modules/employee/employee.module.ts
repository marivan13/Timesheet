import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '@app/modules/employee/employee.component';
import EmployeeService from '@app/core/services/employee.service';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }

