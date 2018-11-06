import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import EmployeeService from '@app/core/services/employee.service';

@NgModule({
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [EmployeeListComponent],
  providers: [EmployeeService],
})
export class EmployeeListModule { }
