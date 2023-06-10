export type IFetchProfile = (a: string) => Promise<{
    status:number, statusText:string, data:string|null
}>;