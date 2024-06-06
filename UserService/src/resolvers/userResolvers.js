import { USERS } from '../data/index.js';

const userResolvers = {
    Query: {
        getAllUsers: () => {
            return USERS;
        },
        getUser: (_, args) => {
            const { id } = args;
            return USERS.find((user) => user.id == id);
        },
    },
};

export default userResolvers;