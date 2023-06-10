<p align="center">
  <a href="" rel="noopener">
 <img   src="./docs/images/LeetCode.jpeg" alt="Project logo"></a>
</p>

<h3 align="center">LeetCode Public API</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg
)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> An unofficial public API for LeetCode with full type support!
    <br> 
</p>

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
  yarn add @husain3012/leetcode-public-api
  ```

- Using npm
  
  ```bash
  npm i @husain3012/leetcode-public-api
  ```

### Usage <a name="usage"></a>


1. Import

    ```javascript
    import {getLCAccount} from "@husain3012/leetcode-public-api"
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
parse = (profile_html:string) => ILeetCodeUser
```