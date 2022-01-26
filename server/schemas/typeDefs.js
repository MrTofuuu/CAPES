const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Hero {
    _id: ID!
    name: String!
    severity: String!
  }
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    hero: [Hero]
    heroes(severity: Int): [Hero]
    profiles: Profile
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
