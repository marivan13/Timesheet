import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule }   from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import { EmployeeUpdateRoutingModule } from './employee-update-routing.module';
import {EmployeeUpdateComponent} from './employee-update.component';
import EmployeeService from '@app/core/services/employee.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    EmployeeUpdateRoutingModule,
    FlexLayoutModule
  ],
  declarations: [EmployeeUpdateComponent],
  providers:[EmployeeService]
})
export class EmployeeUpdateModule { }
