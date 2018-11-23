import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import {ProjectComponent} from './project.component';
import {TeamComponent} from './team/team.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent,
    TeamComponent
  ]
})
export class ProjectModule { }
