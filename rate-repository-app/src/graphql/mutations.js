import {gql} from "@apollo/client";

export const USER_LOGIN = gql`
mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
      }
      accessToken
      expiresAt
    }
  }
`;

export const REVIEW_ADD = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`;

