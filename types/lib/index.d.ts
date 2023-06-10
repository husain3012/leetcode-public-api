export * from "./fetchProfile"
export * from "./parse"
import { ILeetCodeUser } from "..";

export type IGetAccount = (username: string) => Promise<{
    status:number, statusText:string, data:ILeetCodeUser|null
}>;;