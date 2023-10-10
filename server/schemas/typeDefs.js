
const typeDefs = `
  type Hero {
    _id: ID!
    name: String!
    severity: Int!
    description: String!
    image: String!
  }

  type Profile {
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
    profile: Profile
  }

  type Query {
    hero: [Hero]
    heroes(severity: Int): [Hero]
    profiles: Profile
    profile(profileId: ID!): Profile
    emergency:[Emergency]
    emergencies: Emergency
    emergencyLevel(severity: Int): Emergency
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addEmergency(severity: Int!, description: String!, zipcode: Int!): Emergency
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
