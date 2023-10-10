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

export const ADD_USER = gql`
mutation addUser(
    $name: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
          token
          user {
            _id
            name
          }
    }
}
`