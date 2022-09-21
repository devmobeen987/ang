
 export interface AccountresponsApi {
    type: string;
    data:AccountdetailApi[];
  } 
  
  export interface ApiResponseData {
    type:string;
    data:any
  }
  
  export interface ApiResponseMsg {
    type:string;
    msg:string
  } 


  
  
  export interface AccountdetailApi {
    account_name: string;
    account_no: number;
    bank_name: string;
    companyID: number
    id?: number
    ifsc_code: number
    type: string
  } 
  
  export interface singalAccountdetailApi {
    account_name: string;
    account_no: number;
    bank_name: string;
    companyID: number
    id?: number
    created_at:string;
    ifsc_code: number
    type: string
  } 
