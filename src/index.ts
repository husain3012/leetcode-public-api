import { IGetLCAccount } from "../types";

import { fetchAccount } from "./lib/fetchAccount";
import { parseAccount } from "./lib/parseAccount";

export const getLCAccount  : IGetLCAccount = async (username) => {
  
    const html = await fetchAccount(username);
    if(html.data!=null){
      return ({
        status: html.status,
        statusText: html.statusText,
        data: parseAccount(html.data)
      })
    } 

    return ({
      status: html.status,
      statusText: html.statusText,
      data: null
    })

  
}

export { fetchAccount } from "./lib/fetchAccount";
export { parseAccount } from "./lib/parseAccount";


