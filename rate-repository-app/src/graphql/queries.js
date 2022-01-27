import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $after: String, $first: Int) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, after: $after, first: $first) {
    edges {
      node {
        id
              ownerAvatarUrl
              fullName
              description
              language
              stargazersCount
              forksCount
              reviewCount
              ratingAverage
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`;

export const GET_REPOSITORY = gql`
query getRepository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
    reviews(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
 

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;