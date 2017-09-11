module.exports = {
  siteMetadata: {
    title: "Testing"
  },
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.TOKEN,
        graphQLQuery: `
        query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC}) {
              edges {
                node {
                  name
                  description
                  url
                  stargazers {
                    totalCount
                  }
                  readme: object(expression:"master:README.md"){
                    ... on Blob{
                      text
                    }
                  }
                }
              }
            }
          }
          search(query: $q, type: ISSUE, first: $searchFirst) {
            edges {
              node {
                ... on PullRequest {
                  title
                  merged
                  url
                  state
                  repository {
                    stargazers {
                      totalCount
                    }
                    repoUrl: url
                    name
                  }
                }
              }
            }
          }
        }`,
        variables: {
          userFirst: 3,
          searchFirst: 2,
          q: "author:ldd is:merged state:closed type:pr sort:comments",
          author: "ldd"
        }
      }
    }
  ]
};
