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
    path:'employee-add',
    loadChildren: './modules/employee-update/employee-update.module#EmployeeUpdateModule'
  },
  {
    path:'employee-edit',
    loadChildren: './modules/employee-update/employee-update.module#EmployeeUpdateModule'
  }
];

@NgModule({
 // imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
