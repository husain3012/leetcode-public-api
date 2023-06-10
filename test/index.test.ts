import {fetchProfile, parse} from "../src"
describe('Fetching and Parsing', () => {
  let html:string;
  let status: number;
  let profile = "husain3012"

  beforeAll(async()=>{
    const resp = await fetchProfile(profile)
     html = resp.data || ""
     status = resp.status
  })
  
  
  it(`fetches user profile for ${profile} from leetcode.com`, () => {
    


    expect(status).toEqual(200)
    expect(typeof(html)).toEqual("string")
    expect(html.length).toBeGreaterThan(1);
    expect(html).toContain(profile)

    
  });

  it('parses fetched profile', async () => {

    const userData = parse(html)
    expect(userData.username).toEqual(profile);
    
  });


});
