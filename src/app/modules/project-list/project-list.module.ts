import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent} from './project-list.component';
import {ProjectService} from '@app/core/services/project.service';
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    ProjectListRoutingModule
  ],
  declarations: [ProjectListComponent],
  providers: [ProjectService]
})
export class ProjectListModule { }
