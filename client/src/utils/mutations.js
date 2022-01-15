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
