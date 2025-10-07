import { Roles } from "./roles";

export interface User {
    _id?:string,
    email?:string,
    password:string,
    name?: string,
    lastName?:string,
    roles?:Roles[]
}

export interface loginResponse {
    token:string,
    user:User
} 