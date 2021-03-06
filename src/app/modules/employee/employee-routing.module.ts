import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from '@app/modules/employee/employee.component'

const routes: Routes = [
  {
    path:'',
    component: EmployeeComponent
  },
  {
    path:':id',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
