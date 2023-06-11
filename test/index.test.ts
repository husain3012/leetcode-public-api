import { fetchAccount, getLCAccount, parseAccount } from '../src';
import fs from "fs"
describe('Fetching and Parsing', () => {
  let html: string;
  let status: number;
  let profile = 'husain3012';

  beforeAll(async () => {
    const resp = await fetchAccount(profile);
    html = resp.data || '';
    status = resp.status;
  });

  it(`fetches user profile for ${profile} from leetcode.com`, () => {
    expect(status).toEqual(200);
    expect(typeof html).toEqual('string');
    expect(html.length).toBeGreaterThan(1);
    expect(html).toContain(profile);
  });

  it('parses fetched profile', async () => {
    const userData = parseAccount(html);
    expect(userData.username).toEqual(profile);
  });
});

describe('End to End', () => {
  let profile = 'husain3012';

  it(`get the account for the use ${profile}`, async () => {
    const user = await getLCAccount(profile);
    expect(user.status).toEqual(200);
    expect(user.data).not.toBeNull();
    expect(user.data?.username).toEqual(profile);
    
    fs.writeFileSync('response',JSON.stringify(user.data, null, 2))
    
  });
});
