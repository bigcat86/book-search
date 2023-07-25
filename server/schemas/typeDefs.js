const gql = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    user: [User]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
