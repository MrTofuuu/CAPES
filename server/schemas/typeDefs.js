const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hero {
    _id: ID!
    name: String!
    severity: String!
  }

  type Emergency {
    _id: ID!
    severity: String!
  }

  type Query {
    hero: [Hero]
    emergency(_id: String): [Emergency]
  }

  type Mutation {
    createEmergency(_id: String!): Emergency
  }
`;

module.exports = typeDefs;
