import { TODOS } from '../data/index.js';

const todoResolvers = {
    Query: {
        getAllTodos: () => {
            // How the client will get array of todos from the server is implemented in the resolver
            return TODOS;
        },
        getTodo: (_, args) => {
            const { id } = args;
            return TODOS.find((todo) => todo.id == id);
        },
    },
};

export default todoResolvers;