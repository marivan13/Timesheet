export class Ticket{
    constructor(
        public Name:string,
        public Description:string,
        public Estimate:number = 0,
        public StartDate:string = new Date().toISOString(),
        public EndDate:string = new Date().toISOString(),
        public StatusId:number = 0,
        public Status: string,
        public ResponsibleId:number = 0,
        public Responsible :string,
        public TypeId :number = 0,
        public TicketType :string,
        public ProjectId :number = 0,
        public Project :string,
        public ReporterId :number,
        public Reporter  :number,
        public StudentId: number = 0,
        public TimeSheets  :number,
        public Id: number = 0
        )
        { }
}