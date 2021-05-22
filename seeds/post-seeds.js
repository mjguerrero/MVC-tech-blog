const { Post } = require('../models');

const postData = [{
        title: 'Tourism In Turks & Caicos',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Tourism in Aruba',
        content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 2
    },
    {
        title: 'Tourism in Bermudas',
        content: 'St Regis Hotel.',
        user_id: 3
    },
    {
        title: 'Lorem Ipsum III',
        content: 'Ut etiam sit amet nisl purus in mollis.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;