export interface employee{
    id:number,
    firstname:string,
    lastname:string,
    username:string,
    email:string,
    experience:string,
    employeetype:string,
    status:string,
    address:string,
    photo:string,
}

export interface employeeTotalcount{
    employee:EmployeeJoinTotal[]
}
export interface EmployeeJoinTotal
    {
        total:number,
        date:string
    }



export interface totalemployee{
    active:activeEmployee[]
    employee:number
    leave: activeEmployee[]
}

export interface activeEmployee{
    total:number, status:string
}