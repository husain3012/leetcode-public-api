import { ILeetCodeUser, IParseAccount } from '../../@types';

const start = '<script id="__NEXT_DATA__" type="application/json">';
const end = '</script>';

const contestRankingStart =
  'Contest Rating</div><div class="text-label-1 dark:text-dark-label-1 flex items-center text-2xl">';
const contestRankingEnd =
  '</div></div><div class="mr-4"><div class="text-label-3 dark:text-dark-label-3">';
const globalRankingStart =
  'Global Ranking</div><div class="text-label-1 dark:text-dark-label-1 font-medium leading-[22px]">';
const globalRankingEnd =
  '<span class="text-label-4 dark:text-dark-label-4">/<!-- -->';
const contestAttendedStart =
  'Attended</div><div class="text-label-1 dark:text-dark-label-1 font-medium leading-[22px]">';
const contestAttendedEnd = '</div></div></div></div>';

/**
 * Parses data from HTML String of a LeetCode Profile.
 * @param html - HTML string of a LeetCode profile page.
 * @returns - Type safe data for the LeetCode Account
 */
export const parseAccount: IParseAccount = (html) => {
  let useFullData = [];

  const queries: [] = JSON.parse(html.split(start)[1]?.split(end)[0])['props'][
    'pageProps'
  ]['dehydratedState']['queries'];
  queries.forEach((q) => {
    if (q['state'] && q['state']['data'] && q['state']['data']['matchedUser']) {
      useFullData.push(q['state']['data']['matchedUser']);
    }
  });

  const contestAttended =
    parseInt(
      html
        .split(contestAttendedStart)[1]
        ?.split(contestAttendedEnd)[0]
        ?.replace(/,/g, '')
    ) || 0;
  const contestRating =
    parseInt(
      html
        .split(contestRankingStart)[1]
        ?.split(contestRankingEnd)[0]
        ?.replace(/,/g, '')
    ) || 0;
  const contestRanking =
    parseInt(
      html
        .split(globalRankingStart)[1]
        ?.split(globalRankingEnd)[0]
        ?.replace(/,/g, '')
    ) || 0;

  const contestInfo = { contestAttended, contestRating, contestRanking };
  useFullData.push(contestInfo);

  return typecastResponse(useFullData);
};

/**
 * Helper for parseAccount function, to make the data type-safe.
 * @private
 * @param user - Raw JSON response from parsing of the HTML.
 * @returns - Type safe data for the LeetCode Account
 */
const typecastResponse = (user: any[]) => {
  const transformed_user = user.reduce((acc, u: any) => {
    for (let key of Object.keys(u)) {
      acc[key] = u[key];
    }
    return acc;
  }, {});
  return transformed_user as ILeetCodeUser;
};
