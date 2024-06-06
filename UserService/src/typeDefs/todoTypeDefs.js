import { gql } from 'apollo-server';

const todoTypeDefs = gql`
  type Todo {
    id: ID!
    task: String!
    completed: Boolean!
  }

  type Query {
    getAllTodos: [Todo]!
    getTodo(id: ID!): Todo!
  }
`;

export default todoTypeDefs;