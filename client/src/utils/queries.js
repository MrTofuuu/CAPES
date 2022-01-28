import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
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