export type IFetchAccount = (a: string) => Promise<{
    status:number, statusText:string, data:string|null
}>;