# LeetCode Public API

An unofficial public API for LeetCode with full type support!
  

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

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
  - [Installing](#installing)
  - [Usage ](#usage-)
- [Functions](#functions)

## 🧐 About <a name = "about"></a>

I small package written in typescript to fetch public stats of a LeetCode profile. This API makes call to `leetcode.com` so abusing it might lead to rate limiting your IP.
## 🏁 Getting Started <a name = "getting_started"></a>

### Installing


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
  
## Functions

```typescript
fetchAccount = (username:string) => Promise<status:number, statusText:string, data:string|null>
```

```typescript
parseAccount = (profile_html:string) => ILeetCodeUser
```
