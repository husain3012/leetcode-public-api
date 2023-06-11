import { IFetchAccount } from '../types';

/**
 * Fetches the HTML for a LeetCode profile using username
 * @async
 * @param username - Username for the LeetCode profile.
 * @returns - status, statusText, and data (as html string)
 */
export const fetchAccount: IFetchAccount = async (username) => {
  const resp = await fetch(`https://leetcode.com/${username}`);
  if (resp.status !== 200) {
    return {
      status: resp.status,
      statusText: resp.statusText,
      data: null,
    };
  }

  const respText = await resp.text();
  return {
    status: resp.status,
    statusText: resp.statusText,
    data: respText,
  };
};
