export interface Clientlist {
    companyID?:number;
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    tecnology: string;
    startdate?: string;
    enddate?: string;
    
  }

  export interface AddClient {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    tecnology: string;
    startdate: string;
    enddate: string;
    
  }

  
  export interface viewClientlistModel {
    clientname: string;
    email: string;
    lastname: string;
    amount: number;
    country: string;
    discription: string;
    startdate: string;
    enddate: string;
    compdis:string;
    tds:string;
    
  }
  export interface incomesingallistApi {
    tds: string;
    id?: number;
    amount:number;
    ci_descr: string;
    ci_id?:number;
    clientID:number;
    companyID:number;
    discription: string;
    enddate?: string;
    startdate?: string;
  }



  
  export interface ClientIncomesingallistModel {
    amount:number;
    clientID:number;
    companyID:number;
    country: string;
    discription: string;
    email: string;
    id?: number;
    tds: string;
    firstname: string;
    lastname:string;
    incomeID:number;
    enddate?: string;
    startdate?: string;
    
  }

  export interface AddClientapi {
    type: string;
    msg: string;
    
  } 
  export interface clientIncomeModel {
  
    type: string;
    data:ClientIncomesingallistModel[];
  } 
  export interface clientlistApireq {
    success:Clientlist[];
    
  }

