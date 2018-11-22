export class Project {
    // name:string;
    // description:string;
    // customerName:string;
    // startDate:string;
    // endDate:string;
    // imageUrl:string;
    // tickets: string;
    // id:number;

    constructor(
      public Name:string,
      public Description:string,
      public CustomerName:string,
      public StartDate:string = new Date().toISOString(),
      public EndDate:string = new Date().toISOString(),
      public ImageUrl:string,
     // public Tickets: string,
      public Id:number 
    ){}
}
