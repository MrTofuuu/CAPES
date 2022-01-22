import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $heroNum: Int!) {
    createVote(_id: $_id, heroNum: $heroNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const CREATE_USER = gql `
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
          token
          user {
              _id
              username
          }
    }
}
`

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
          token
          user {
            _id
            username
            email
          }
    }
}
`