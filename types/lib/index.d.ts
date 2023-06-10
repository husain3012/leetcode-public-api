export * from "./fetchAccount"
export * from "./parse"
import { ILeetCodeUser } from "..";

export type IGetLCAccount = (username: string) => Promise<{
    status:number, statusText:string, data:ILeetCodeUser|null
}>;;