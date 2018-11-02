import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path:'employee',
    loadChildren: './modules/employee/employee.module#EmployeeModule'
  },
  {
    path:'projects',
    loadChildren: './modules/project-list/project-list.module#ProjectListModule'
  }

];

@NgModule({
 // imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
