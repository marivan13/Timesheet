import {Project} from './project.model';
import {Role} from './role.model';

export default class Employee{

  constructor(
    public Id: number = 0,
    public First: string = '',
    public Last: string = '',
    public Email: string = '',
    public LocationId: number = 0,
    public Birthday: string = new Date().toISOString(),
    public Address: string = '',
    public Skype: string = '',
    public Projects: Project[] = [],
    public Phone: string = '',
    public ImageUrl: string = '',
    public PositionId: number = 0,
    public Password: string = '',
    public Roles: Role[] = []
    ){}
}