import { IFetchAccount } from "../../types"

export const fetchAccount : IFetchAccount = async (username)  => {
   const resp = await fetch(`https://leetcode.com/${username}`)
   if(resp.status!=200){
    return ({
      status:resp.status, statusText:resp.statusText, data:null
    })
   }
   const respText = await resp.text();
   return ({
    status:resp.status, statusText:resp.statusText, data:respText
  })
    
}