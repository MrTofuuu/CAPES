
const typeDefs = `
  type Hero {
    _id: ID!
    name: String!
    severity: Int!
    description: String!
    image: String!
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Emergency {
    _id: ID
    severity: Int
    date: String
    zipcode: Int
    description: String
    heroes: [Hero]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    hero: [Hero]
    heroes(severity: Int): [Hero]
    users: User
    user(userId: ID!): User
    emergency:[Emergency]
    emergencies: Emergency
    emergencyLevel(severity: Int): Emergency
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addEmergency(severity: Int!, description: String!, zipcode: Int!): Emergency
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
