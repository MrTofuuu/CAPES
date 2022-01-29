import { gql } from '@apollo/client';

export const ADD_EMERGENCY = gql`
  mutation addEmergency($severity: Int!, $description: String!, $zipcode: Int!) {
    addEmergency(severity: $severity, description: $description, zipcode: $zipcode) {
      severity
      description
      heroes{
        name
        severity
        image
      }
    }
  }
`;

export const ADD_PROFILE = gql`
mutation addProfile(
    $name: String!
    $email: String!
    $password: String!
  ) {
    addProfile(
      name: $name
      email: $email
      password: $password
    ) {
      token
      profile {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
          token
          profile {
            _id
            name
          }
    }
}
`