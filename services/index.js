import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            slug
            createdAt
            title
            content {
              text
            }
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            id
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.postsConnection.edges;
};
