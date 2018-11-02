import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent} from './project-list.component';
 
@NgModule({
  imports: [
    CommonModule,
    ProjectListRoutingModule
  ],
  declarations: [ProjectListComponent]
})
export class ProjectListModule { }
