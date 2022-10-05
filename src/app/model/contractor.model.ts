export interface AddContractorApi {
    type:string;
    msg:string;
    
  }
  export interface reqContractorApi {
    data:reaponsContractorApi[];
    
  }

  export interface singalContractorApi {
    type:string;
    data:reaponsContractorApi;
    
  }


  export interface reaponsContractorApi {
    address: string;
    companyID: number;
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    join_date: string;
    status: string;
    type: string;
    
  } 