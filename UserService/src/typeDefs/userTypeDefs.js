import { gql } from 'apollo-server';

const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    todos: [Todo]!
  }

  type Query {
    getAllUsers: [User]!
    getUser(id: ID!): User!
  }
`;

export default userTypeDefs;