import { IGetAccount } from "../types";

import { fetchProfile } from "./lib/fetchProfile";
import { parse } from "./lib/parse";

export const getAccount  : IGetAccount = async (username) => {
  
    const html = await fetchProfile(username);
    if(html.data!=null){
      return ({
        status: html.status,
        statusText: html.statusText,
        data: parse(html.data)
      })
    } 

    return ({
      status: html.status,
      statusText: html.statusText,
      data: null
    })

  
}

export { fetchProfile } from "./lib/fetchProfile";
export { parse } from "./lib/parse";


