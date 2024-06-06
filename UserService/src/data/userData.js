import TODOS from './todoData.js';

const USERS = [
    {
        id: "1",
        name: 'John',
        email: 'john@example.com',
        todos: [
            TODOS[0],
            TODOS[1],
        ],
    },
    {
        id: "2",
        name: 'Jane',
        email: 'jane@example.com',
        todos: [
            TODOS[2],
        ],
    },
    {
        id: "3",
        name: 'Joe',
        email: 'joe@example.com',
        todos: [],
    },
];

export default USERS;