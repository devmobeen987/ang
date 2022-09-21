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

  export interface AddClientapi {
    type: string;
    msg: string;
    
  } 
  export interface clientlistApireq {
    success:Clientlist[];
    
  }

