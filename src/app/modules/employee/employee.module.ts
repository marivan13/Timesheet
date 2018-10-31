import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { EmployeeComponent } from '@app/modules/employee/components/employee.component';
import EmployeeService from '@app/core/services/employee.service'; 

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }
