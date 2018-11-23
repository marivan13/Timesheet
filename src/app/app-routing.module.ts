import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'employees',
    loadChildren: './modules/employee-list/employee-list.module#EmployeeListModule'
  },
  {
    path:'projects',
    loadChildren: './modules/project-list/project-list.module#ProjectListModule'
  },
  {
    path:'employee',
    loadChildren: './modules/employee/employee.module#EmployeeModule'
  },
  {
    path:'project',
    loadChildren: './modules/project/project.module#ProjectModule'
  },
  {
    path:'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path:'ticket',
    loadChildren: './modules/ticket/ticket.module#TicketModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
