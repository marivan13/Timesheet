import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import {ProjectService} from '@app/core/services/project.service';
import {Project} from '@app/core/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects:Array<Project>;
  displayedColumns = ['name',  'customerName', 'startDate', 'description', 'edit', 'delete'];
  dataSource:MatTableDataSource<Project>;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    console.log("ProjectInit");
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
      this.dataSource = new MatTableDataSource(this.projects);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
