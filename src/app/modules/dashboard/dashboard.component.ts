import { Component, OnInit } from '@angular/core';
import {Project} from '@app/core/models/project.model';
import {ProjectService} from '@app/core/services/project.service';
import {TaskService} from '@app/core/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("dashboard component");
  }

}
