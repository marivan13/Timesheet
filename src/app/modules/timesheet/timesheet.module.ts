import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import { TimesheetComponent } from './timesheet.component';
import {TimesheetRoutingModule} from '@app/modules/timesheet/timesheet-routing.module'

@NgModule({
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    MatTableModule

  ],
  declarations: [TimesheetComponent]
})
export class TimesheetModule { }
