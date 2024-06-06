import { gql } from 'apollo-server';
import todoTypeDefs from './todoTypeDefs.js';
import userTypeDefs from './userTypeDefs.js';

const typeDefs = gql`
  ${todoTypeDefs}
  ${userTypeDefs}
`;

export default typeDefs;