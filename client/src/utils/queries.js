import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query allUsers {
    users {
      _id
      name
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
    }
  }
`;

export const QUERY_HEROES = gql`
  query allHeroes {
    hero {
      _id
      name
      severity
      description
      image
    }
  }
`;

export const QUERY_EMERGENCY = gql`
  query getEmergencies{
    emergencies{
      _id
      severity
      description
      zipcode
      date
    }
  }`

export const QUERY_SINGLE_EMERGENCY = gql`
  query getSingleEmergency($emergencyId: ID!){
    emergency(emergencyId: $emergencyID){
      _id
      severity
      description
      zipcode
      date
      hero{
        _id
        name
        severity
        description
      }
    }
  }`;