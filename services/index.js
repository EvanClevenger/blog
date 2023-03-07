import { request, gql } from 'graphql-request' ;

export const getPosts = async () => {
    const query = gql `
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              exerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `
}