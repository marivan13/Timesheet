import {Project} from './project.model';
export default class Employee{

  First: string;
  Last?: string;
  Email?: string;
  LocationId?: number;
  Birthday?: string;
  Address?: string;
  Skype?: string;
  Projects?: Array<Project>;
  Phone?: string;
  ImageUrl?: string
  PositionId?: number;
  Password?: string;
  Roles?: number[];
  Id: number;

  constructor(){
      this.Birthday = "2017-10-26T13:44:28.623";
      this.LocationId = 1;
    //  this.Projects.push(new Project);
      this.PositionId = 1;
      this.Roles = [1];
  }
}