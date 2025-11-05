import { User } from "./user"

export interface Managment{
active?:boolean 
createdAt?: Date
date?: Date
startTime?:Date
totalHours?:number
updatedAt?:Date
userId?:User
activeManagment?:boolean
}

export interface AllManagmentToday {
count:number
hasManagmentsToday:boolean,
managments:Managment[]
}