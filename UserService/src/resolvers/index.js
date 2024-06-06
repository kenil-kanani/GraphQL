import todoResolvers from './todoResolvers.js';
import userResolvers from './userResolvers.js';

const resolvers = {
    ...todoResolvers,
    ...userResolvers,
};

export default resolvers;