export interface incomeList {
    companyID:number;
    totalincome:number;
    id?: number;
    discription: string;
    startdate?: string;
    enddate?: string;
    }

  export interface incomeApi {
  
    type: string;
    data:incomeList[];
  } 
  
  export interface incomesingallistApi {
    tds: string;
    id?: number;
    amount:number;
    ci_descr: string;
    ci_id?:number;
    account_id?:number;
    clientID:number;
    companyID:number;
    discription: string;
    enddate?: string;
    startdate?: string;
  }

  export interface incomesingallistApisecond {
    type: string;
    data:incomesingallistApi[];
  } 
