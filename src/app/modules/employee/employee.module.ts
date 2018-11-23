import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '@app/modules/employee/employee.component';
import EmployeeService from '@app/core/services/employee.service';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }

