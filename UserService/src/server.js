import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/index.js';
import typeDefs from './typeDefs/index.js';

// create a new apollo server object using the ApolloServer constructor
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});