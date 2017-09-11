### gatsby-starter-github-portfolio

This is a starter site that attempts to follow the following flow:
1) During development:
  - fetch data from github 
  - filter and sort the data you got from github
2) At build time:
  - static results get you a static page
3) When accessing the site:
  - no API calls to Github's API
  
## Install

`npm install gatsby-starter-github-portfolio`

## Run

`cross-env TOKEN=hunter2 gatsby develop`

## Tips and tricks

You probably want to look at [gatsby-source-github-api](https://github.com/ldd/gatsby-source-github) for how to make valid queries.

Ideally, you should only modify:

- `gatsby-config.js` to change the `graphQL` query from the github API
- `main.js` to change the `query` on the data 
- `dataParser.js` to filter and sort the data you got
