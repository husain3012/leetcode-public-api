# LeetCode Public API

An unofficial public API for LeetCode with full type support and zero dependencies!
**Requires NodeJS >= 17.5**


![LeetCode Public API](https://github.com/husain3012/leetcode-public-api/assets/49821470/3b30b00f-e39f-4dea-9aea-0e71557ff669)


<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/husain3012/leetcode-public-api.svg
)](https://github.com/husain3012/leetcode-public-api/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/husain3012/leetcode-public-api.svg)](https://github.com/husain3012/leetcode-public-api/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [LeetCode Public API](#leetcode-public-api)
  - [📝 Table of Contents](#-table-of-contents)
  - [🧐 About ](#-about-)
  - [🏁 Getting Started ](#-getting-started-)
    - [Installing](#installing)
    - [Usage ](#usage-)
  - [Example Response](#example-response)
  - [Functions](#functions)

## 🧐 About <a name = "about"></a>

I small package written in typescript to fetch public stats of a LeetCode profile. This API makes call to `leetcode.com` using built in ```fetch```, so abusing it might lead to rate limiting your IP, and using it directly in browser may hit you with CORS.
## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

Compatible with JavaScript and Node JS 18 environments.

- Using yarn

  ```bash
  yarn add leetcode-public-api
  ```

- Using npm
  
  ```bash
  npm i leetcode-public-api
  ```

### Usage <a name="usage"></a>


1. Import

    ```javascript
    import {getLCAccount} from "leetcode-public-api"
    ```

2. Use

    ```javascript
    const leetCodeAccount = await getLCAccount('username')
    ```
  
## Example Response

```javascript
{
  status:200,
  statusText:"OK",
  data:{
    "contestBadge": null,
    "username": "husain3012",
    "githubUrl": "https://github.com/husain3012",
    "twitterUrl": null,
    "linkedinUrl": null,
    "profile": {
      "ranking": 289606,
      "userAvatar": "https://assets.leetcode.com/users/avatars/avatar_1682222071.png",
      "realName": "Husain Shahid",
      "aboutMe": "",
      "school": null,
      "websites": [
        "husainshahidrao.com"
      ],
      "countryName": null,
      "company": null,
      "jobTitle": null,
      "skillTags": [],
      "postViewCount": 81,
      "postViewCountDiff": 0,
      "reputation": 0,
      "reputationDiff": 0,
      "solutionCount": 4,
      "solutionCountDiff": 0,
      "categoryDiscussCount": 0,
      "categoryDiscussCountDiff": 0
    },
    "activeBadge": {
      "displayName": "Feb LeetCoding Challenge",
      "icon": "/static/images/badges/dcc-2022-2.png"
    },
    "languageProblemCount": [
      {
        "languageName": "C++",
        "problemsSolved": 226
      },
      {
        "languageName": "Elixir",
        "problemsSolved": 2
      },
      {
        "languageName": "Python",
        "problemsSolved": 1
      },
      {
        "languageName": "C",
        "problemsSolved": 1
      },
      {
        "languageName": "Python3",
        "problemsSolved": 1
      }
    ],
    "tagProblemCounts": {
      "advanced": [
        {
          "tagName": "Dynamic Programming",
          "tagSlug": "dynamic-programming",
          "problemsSolved": 35
        },
        {
          "tagName": "Backtracking",
          "tagSlug": "backtracking",
          "problemsSolved": 8
        },
        {
          "tagName": "Monotonic Stack",
          "tagSlug": "monotonic-stack",
          "problemsSolved": 8
        },
        {
          "tagName": "Divide and Conquer",
          "tagSlug": "divide-and-conquer",
          "problemsSolved": 7
        },
        {
          "tagName": "Union Find",
          "tagSlug": "union-find",
          "problemsSolved": 7
        },
        {
          "tagName": "Quickselect",
          "tagSlug": "quickselect",
          "problemsSolved": 2
        },
        {
          "tagName": "Trie",
          "tagSlug": "trie",
          "problemsSolved": 2
        },
        {
          "tagName": "Topological Sort",
          "tagSlug": "topological-sort",
          "problemsSolved": 2
        },
        {
          "tagName": "Rolling Hash",
          "tagSlug": "rolling-hash",
          "problemsSolved": 1
        },
        {
          "tagName": "Bitmask",
          "tagSlug": "bitmask",
          "problemsSolved": 1
        }
      ],
      "intermediate": [
        {
          "tagName": "Hash Table",
          "tagSlug": "hash-table",
          "problemsSolved": 43
        },
        {
          "tagName": "Math",
          "tagSlug": "math",
          "problemsSolved": 34
        },
        {
          "tagName": "Binary Search",
          "tagSlug": "binary-search",
          "problemsSolved": 24
        },
        {
          "tagName": "Depth-First Search",
          "tagSlug": "depth-first-search",
          "problemsSolved": 17
        },
        {
          "tagName": "Greedy",
          "tagSlug": "greedy",
          "problemsSolved": 16
        },
        {
          "tagName": "Breadth-First Search",
          "tagSlug": "breadth-first-search",
          "problemsSolved": 16
        },
        {
          "tagName": "Tree",
          "tagSlug": "tree",
          "problemsSolved": 11
        },
        {
          "tagName": "Bit Manipulation",
          "tagSlug": "bit-manipulation",
          "problemsSolved": 10
        },
        {
          "tagName": "Binary Tree",
          "tagSlug": "binary-tree",
          "problemsSolved": 9
        },
        {
          "tagName": "Graph",
          "tagSlug": "graph",
          "problemsSolved": 9
        },
        {
          "tagName": "Sliding Window",
          "tagSlug": "sliding-window",
          "problemsSolved": 8
        },
        {
          "tagName": "Recursion",
          "tagSlug": "recursion",
          "problemsSolved": 5
        },
        {
          "tagName": "Design",
          "tagSlug": "design",
          "problemsSolved": 5
        },
        {
          "tagName": "Ordered Set",
          "tagSlug": "ordered-set",
          "problemsSolved": 1
        },
        {
          "tagName": "Randomized",
          "tagSlug": "randomized",
          "problemsSolved": 1
        },
        {
          "tagName": "Iterator",
          "tagSlug": "iterator",
          "problemsSolved": 1
        },
        {
          "tagName": "Brainteaser",
          "tagSlug": "brainteaser",
          "problemsSolved": 1
        }
      ],
      "fundamental": [
        {
          "tagName": "Array",
          "tagSlug": "array",
          "problemsSolved": 114
        },
        {
          "tagName": "String",
          "tagSlug": "string",
          "problemsSolved": 51
        },
        {
          "tagName": "Sorting",
          "tagSlug": "sorting",
          "problemsSolved": 31
        },
        {
          "tagName": "Two Pointers",
          "tagSlug": "two-pointers",
          "problemsSolved": 30
        },
        {
          "tagName": "Stack",
          "tagSlug": "stack",
          "problemsSolved": 20
        },
        {
          "tagName": "Linked List",
          "tagSlug": "linked-list",
          "problemsSolved": 15
        },
        {
          "tagName": "Matrix",
          "tagSlug": "matrix",
          "problemsSolved": 13
        },
        {
          "tagName": "Simulation",
          "tagSlug": "simulation",
          "problemsSolved": 11
        },
        {
          "tagName": "Queue",
          "tagSlug": "queue",
          "problemsSolved": 3
        },
        {
          "tagName": "Enumeration",
          "tagSlug": "enumeration",
          "problemsSolved": 1
        }
      ]
    },
    "userCalendar": {
      "activeYears": [
        2023,
        2022,
        2021
      ],
      "streak": 17,
      "totalActiveDays": 91,
      "dccBadges": [],
      "submissionCalendar": "{\"1672617600\": 4, \"1672876800\": 3, \"1673222400\": 5, \"1673395200\": 8, \"1673481600\": 7, \"1674259200\": 1, \"1674864000\": 1, \"1675036800\": 2, \"1675296000\": 14, \"1675382400\": 7, \"1675468800\": 5, \"1676678400\": 1, \"1677628800\": 3, \"1678320000\": 2, \"1678406400\": 6, \"1678492800\": 1, \"1678838400\": 2, \"1679356800\": 10, \"1679788800\": 13, \"1679875200\": 7, \"1680048000\": 5, \"1680825600\": 3, \"1680998400\": 13, \"1681257600\": 2, \"1681430400\": 5, \"1681516800\": 1, \"1681603200\": 8, \"1681689600\": 1, \"1681948800\": 7, \"1682035200\": 28, \"1682121600\": 12, \"1682208000\": 17, \"1682294400\": 4, \"1682380800\": 16, \"1682467200\": 4, \"1682553600\": 1, \"1682640000\": 2, \"1682726400\": 1, \"1682812800\": 3, \"1682899200\": 4, \"1682985600\": 3, \"1683072000\": 1, \"1683158400\": 2, \"1683244800\": 2, \"1683331200\": 1, \"1684281600\": 1, \"1685750400\": 7, \"1685836800\": 9, \"1685923200\": 14, \"1686009600\": 9, \"1686096000\": 12, \"1686182400\": 16, \"1686268800\": 9, \"1686355200\": 7, \"1655078400\": 1, \"1655337600\": 3, \"1655424000\": 7, \"1655510400\": 18, \"1655596800\": 7, \"1655683200\": 1, \"1655856000\": 7, \"1655942400\": 3, \"1656115200\": 15, \"1656288000\": 1, \"1656720000\": 1, \"1657843200\": 5, \"1664064000\": 3, \"1664409600\": 5, \"1664496000\": 13, \"1664582400\": 3, \"1665360000\": 3, \"1665446400\": 4, \"1668038400\": 8, \"1668124800\": 11, \"1668384000\": 3, \"1668470400\": 1, \"1668556800\": 8, \"1668643200\": 2, \"1668729600\": 3, \"1668816000\": 1, \"1668902400\": 16, \"1668988800\": 9, \"1669075200\": 1, \"1669161600\": 2, \"1669248000\": 2, \"1669334400\": 1, \"1669420800\": 1, \"1670284800\": 19, \"1670371200\": 1, \"1670630400\": 1, \"1672185600\": 3}"
    },
    "badges": [
      {
        "id": "1456837",
        "name": "Annual Badge",
        "shortName": "100 Days Badge 2022",
        "displayName": "100 Days Badge 2022",
        "icon": "https://leetcode.com/static/images/badges/2022/lg/2022-annual-100.png",
        "hoverText": "100 Days Badge 2022",
        "medal": {
          "slug": "100-days-badge-2022",
          "config": {
            "iconGif": "https://leetcode.com/static/images/badges/2022/gif/2022-annual-100.gif",
            "iconGifBackground": "https://assets.leetcode.com/static_assets/others/badge-background.png"
          }
        },
        "creationDate": "2023-01-01",
        "category": "COMPETITION"
      },
      {
        "id": "615138",
        "name": "Daily Coding Challenge",
        "shortName": "Feb Badge",
        "displayName": "Feb LeetCoding Challenge",
        "icon": "/static/images/badges/dcc-2022-2.png",
        "hoverText": "Feb LeetCoding Challenge",
        "medal": {
          "slug": "dcc-february-2022",
          "config": {
            "iconGif": "https://leetcode.com/static/images/badges/2022/gif/2022-02.gif",
            "iconGifBackground": "https://assets.leetcode.com/static_assets/others/badge-background.png"
          }
        },
        "creationDate": "2022-02-28",
        "category": "DCC"
      }
    ],
    "upcomingBadges": [
      {
        "name": "Jun LeetCoding Challenge",
        "icon": "/static/images/badges/dcc-2023-6.png",
        "progress": 26
      }
    ],
    "problemsSolvedBeatsStats": [
      {
        "difficulty": "Easy",
        "percentage": 84.35
      },
      {
        "difficulty": "Medium",
        "percentage": 88.69
      },
      {
        "difficulty": "Hard",
        "percentage": 81.17
      }
    ],
    "submitStatsGlobal": {
      "acSubmissionNum": [
        {
          "difficulty": "All",
          "count": 215
        },
        {
          "difficulty": "Easy",
          "count": 69
        },
        {
          "difficulty": "Medium",
          "count": 122
        },
        {
          "difficulty": "Hard",
          "count": 24
        }
      ]
    },
    "contestAttended": 4,
    "contestRating": 1481,
    "contestRanking": 194463
  }
}
```

## Functions

| Function     | Type  | Input                     | Output                                                             | Description                                                                     |
| ------------ | ----- | ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| fetchAccount | async | ```username:string```     | ```{status:number, statusText:string, data:string\|null}```        | Fetches the HTML for a profile page                                             |
| parseAccount | sync  | ```profile_html:string``` | ```ILeetCodeUser```                                                | Parses and extracts info from the HTML of a profile                             |
| getLCAccount | async | ```username:string```     | ```{status:number, statusText:string, data:ILeetCodeUser\|null}``` | Top level function, uses fetchAccount with parseAccount to get the profile info |

