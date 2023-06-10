import axios from 'axios'
import { IFetchAccount } from '../../types';

export const fetchAccount: IFetchAccount = async (username) => {
  const resp = await axios.get(`https://leetcode.com/${username}`);
  if (resp.status !== 200) {
    return {
      status: resp.status,
      statusText: resp.statusText,
      data: null,
    };
  }
  const respText = await resp.data;
  return {
    status: resp.status,
    statusText: resp.statusText,
    data: respText,
  };
};
