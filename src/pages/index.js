import React from "preact/compat";
import Main from "../components/main";
import { parseData } from "../parsers/dataParser";
import { graphql } from "gatsby";

// our only page is the main component provided with data
// from the graphQl query's result
export default ({ data }) => <Main data={parseData(data)} />;

// GraphQl query
export const query = graphql`
  query onGithub {
    githubData {
      data {
        search {
          edges {
            node {
              title
              merged
              url
              state
              repository {
                repoUrl
                stargazers {
                  totalCount
                }
                name
              }
            }
          }
        }
        user {
          repositories {
            edges {
              node {
                name
                description
                url
                stargazers {
                  totalCount
                }
                readme {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;
