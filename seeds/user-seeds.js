const { User } = require('../models');

const userData = [{
        username: 'Jose',
        password: 'jose'

    },
    {
        username: 'Jake',
        password: 'jake'
    },
    {
        username: 'Luis',
        password: 'luis'
    },
    {
        username: 'Maria',
        password: 'maria'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;