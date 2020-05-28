### gatsby-starter-github-portfolio

This is a starter site that attempts to follow the following flow:

1. During development:

- fetch data from github
- filter and sort the data you got from github

2. At build time:

- static results get you a static page

3. When accessing the site:

- no API calls to Github's API

## Install

`npm install gatsby-starter-github-portfolio`

## Configuration

- get a [personal access token from github](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
- create a new file `.env` and save your token:

```
TOKEN=very-long-unreadable-string-goes-here
```

- modify `gatsby-config.js`. Replace `ldd` (my user name) with yours. For example:

```
  q: "author:someUser is:merged state:closed type:pr sort:comments",
  author: "someUser"

```

## Run

- `yarn develop` or `npm develop` for development

- `yarn build` or `npm build` to create a build that you can deploy to your favourite host

## Tips and tricks

You probably want to look at [gatsby-source-github-api](https://github.com/ldd/gatsby-source-github) for how to make valid queries.

Ideally, you should only modify:

- `gatsby-config.js` to change the `graphQL` query from the github API
- `main.js` to change the `query` on the data
- `dataParser.js` to filter and sort the data you got

### FAQ

#### There was an error in your GraphQL query

- make sure you have a token and that you saved it in a file named `.env`
- if you want to make a RAW github v4 Query, do it in `gatsby-config.js`
  - My plugin, `gatsby-source-github-api` takes an optional field, `graphQLQuery`, that let's you define it
