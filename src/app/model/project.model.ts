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
  
  export interface projectList {
    companyID:number;
    clientID:number;
    id?: number;
    firstname: string;
    lastname: string;
    projectname: string;
    startdate?: string;
    enddate?: string;
    status?:string;
    }

  export interface projectApi {
  
    type: string;
    data:projectList[];
  }

  export interface SingalprojectApi {
    success: projectList;
    client:Clientlist[];
  }

  export interface UpdateprojectApi {
    type:string;
    msg:string;
  }
  



 